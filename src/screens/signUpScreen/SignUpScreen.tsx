import {
  Alert,
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import SignUpForm from "../../components/SignUpForm";
import { RootStackParamList } from "../../navigation/types";
import { StackNavigationProp } from "@react-navigation/stack";
import { useAuthRequest } from "expo-auth-session/providers/facebook";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  getAdditionalUserInfo,
  signInWithCredential,
} from "firebase/auth";
import { auth, db } from "../../../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import Constants from "expo-constants";
import { makeRedirectUri } from "expo-auth-session";

const { width, height } = Dimensions.get("window");

// This is needed for Google Sign-In to work properly
WebBrowser.maybeCompleteAuthSession();

const SignUpScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const fbAppId = Constants.expoConfig?.extra?.facebookAppId as string;

  // Facebook Auth
  const [fbRequest, fbResponse, fbPromptAsync] = useAuthRequest(
    {
      clientId: fbAppId,
    },
    {
      useProxy: true,
      projectNameForProxy: "@erenavar/meditation-app",
    }
  );

  // Google Auth - Using the exact Web Client ID
  // Google Auth - Force using the proxy for Web client
  const [googleRequest, googleResponse, googlePromptAsync] =
    Google.useIdTokenAuthRequest(
      {
        clientId:
          "237439978029-ea7nsfr4rr68tu3442892amgdshvp113.apps.googleusercontent.com",
      },
      {
        useProxy: true,
        projectNameForProxy: "@erenavar/meditation-app",
      }
    );

  // Handle Facebook response
  useEffect(() => {
    if (fbResponse?.type === "success") {
      const { access_token } = fbResponse.params;
      signInWithFacebook(access_token);
    }
  }, [fbResponse]);

  // Handle Google response
  useEffect(() => {
    if (googleResponse?.type === "success") {
      const { id_token } = googleResponse.params;
      signInWithGoogle(id_token);
    }
  }, [googleResponse]);

  const signInWithFacebook = async (token: string) => {
    try {
      const credential = FacebookAuthProvider.credential(token);
      const userCredential = await signInWithCredential(auth, credential);
      const additionalUserInfo = getAdditionalUserInfo(userCredential);

      if (additionalUserInfo?.isNewUser) {
        console.log(
          "Yeni Facebook kullanıcısı, Firestore profili oluşturuluyor..."
        );
        await setDoc(doc(db, "users", userCredential.user.uid), {
          fullName: userCredential.user.displayName || "Facebook User",
          email: userCredential.user.email,
          profileImgUrl: userCredential.user.photoURL,
          authProvider: "facebook",
          creationDate: new Date().toISOString(),
          uid: userCredential.user.uid,
        });
      }

      console.log("✅ Facebook ile Firebase'e başarıyla giriş yapıldı!");
      Alert.alert("Başarılı", "Facebook ile giriş yapıldı!");
      navigation.navigate("TabBar");
    } catch (error) {
      console.error("Firebase'e Facebook ile giriş sırasında hata:", error);
      Alert.alert(
        "Giriş Başarısız",
        "Facebook ile giriş yapılırken bir sorun oluştu."
      );
    }
  };

  const signInWithGoogle = async (idToken: string) => {
    try {
      console.log("🔐 Google Sign-In başlatılıyor...");
      const credential = GoogleAuthProvider.credential(idToken);
      const userCredential = await signInWithCredential(auth, credential);
      const additionalUserInfo = getAdditionalUserInfo(userCredential);

      if (additionalUserInfo?.isNewUser) {
        console.log(
          "Yeni Google kullanıcısı, Firestore profili oluşturuluyor..."
        );
        await setDoc(doc(db, "users", userCredential.user.uid), {
          fullName: userCredential.user.displayName || "Google User",
          email: userCredential.user.email,
          profileImgUrl: userCredential.user.photoURL,
          authProvider: "google",
          creationDate: new Date().toISOString(),
          uid: userCredential.user.uid,
        });
      }

      console.log("✅ Google ile Firebase'e başarıyla giriş yapıldı!");
      Alert.alert("Başarılı", "Google ile giriş yapıldı!");
      navigation.navigate("TabBar");
    } catch (error: any) {
      console.error("Firebase'e Google ile giriş sırasında hata:", error);
      Alert.alert(
        "Giriş Başarısız",
        `Google ile giriş yapılırken bir sorun oluştu: ${error.message}`
      );
    }
  };

  if (!fbAppId) {
    return (
      <View style={styles.errorContainer}>
        <Text>Facebook App ID not configured!</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Pressable onPress={() => navigation.navigate("Login")}>
        <AntDesign
          name="arrowleft"
          size={34}
          color="black"
          style={styles.arrow}
        />
      </Pressable>
      <View style={styles.textArea}>
        <Text style={styles.text}>Create An Account</Text>
      </View>
      <View style={styles.inputArea}>
        <SignUpForm />
      </View>
      <View style={styles.buttonArea}>
        <View style={styles.orLine}>
          <View style={styles.line}></View>
          <Text style={{ fontSize: 15, marginTop: 20, marginHorizontal: 10 }}>
            Or sign up with
          </Text>
          <View style={styles.line}></View>
        </View>

        {/* Facebook Button */}
        <Pressable
          disabled={!fbRequest}
          onPress={() => fbPromptAsync({ useProxy: true })}
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: "#3963C7" },
            pressed && styles.buttonPressed,
            !fbRequest && styles.buttonDisabled,
          ]}>
          <AntDesign name="facebook-square" size={20} color="white" />
          <Text style={styles.buttonText}>Sign up with Facebook</Text>
        </Pressable>

        {/* Google Button */}
        <Pressable
          disabled={!googleRequest}
          onPress={() => {
            console.log("Google Sign-Up button pressed");
            googlePromptAsync();
          }}
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: "#D1422B" },
            pressed && styles.buttonPressed,
            !googleRequest && styles.buttonDisabled,
          ]}>
          <AntDesign name="google" size={20} color="white" />
          <Text style={styles.buttonText}>Sign up with Google</Text>
        </Pressable>
      </View>
      <View style={styles.bottomLine}>
        <Text style={{ fontSize: 18 }}>Have an account? </Text>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text
            style={{
              color: "dodgerblue",
              textDecorationLine: "underline",
              fontSize: 18,
            }}>
            Log In
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: width * 0.04,
    marginTop: width * 0.04,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  arrow: {
    marginTop: height * 0.04,
  },
  textArea: {
    marginLeft: width * 0.05,
    marginVertical: height * 0.04,
  },
  text: {
    fontSize: 26,
    fontWeight: "500",
    letterSpacing: 1.4,
  },
  inputArea: {
    marginHorizontal: width * 0.05,
    gap: 40,
    marginTop: height * 0.0001,
  },
  buttonArea: {
    marginTop: 40,
    alignItems: "center",
  },
  orLine: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  line: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    width: "100%",
    marginVertical: 7,
  },
  button: {
    flexDirection: "row",
    marginTop: 20,
    gap: 8,
    alignItems: "center",
    width: 300,
    paddingVertical: 10,
    borderRadius: 50,
    justifyContent: "center",
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
  },
  bottomLine: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 40,
  },
});
