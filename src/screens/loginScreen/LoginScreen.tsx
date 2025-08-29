import {
  Alert,
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from "@expo/vector-icons/AntDesign";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/types";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithCredential,
  getAdditionalUserInfo,
} from "firebase/auth";
import { auth, db } from "../../../firebaseConfig";
import { doc, setDoc, getDoc } from "firebase/firestore";
import * as Google from "expo-auth-session/providers/google";
import { useAuthRequest } from "expo-auth-session/providers/facebook";
import * as WebBrowser from "expo-web-browser";
import Constants from "expo-constants";

const { width, height } = Dimensions.get("window");

// This is needed for Google Sign-In to work properly
WebBrowser.maybeCompleteAuthSession();

const LoginScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const fbAppId = Constants.expoConfig?.extra?.facebookAppId as string;

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

  // Handle Google response
  useEffect(() => {
    if (googleResponse?.type === "success") {
      const { id_token } = googleResponse.params;
      signInWithGoogle(id_token);
    }
  }, [googleResponse]);

  // Handle Facebook response
  useEffect(() => {
    if (fbResponse?.type === "success") {
      const { access_token } = fbResponse.params;
      signInWithFacebook(access_token);
    }
  }, [fbResponse]);

  // Email/Password Sign In
  const handleEmailSignIn = async () => {
    if (!email || !password) {
      Alert.alert("Hata", "Lütfen email ve şifre giriniz");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("✅ Email ile giriş başarılı!");
      navigation.navigate("TabBar");
    } catch (error: any) {
      console.error("Email giriş hatası:", error);
      if (error.code === "auth/user-not-found") {
        Alert.alert("Hata", "Kullanıcı bulunamadı");
      } else if (error.code === "auth/wrong-password") {
        Alert.alert("Hata", "Yanlış şifre");
      } else if (error.code === "auth/invalid-email") {
        Alert.alert("Hata", "Geçersiz email");
      } else {
        Alert.alert("Hata", "Giriş yapılamadı");
      }
    }
  };

  // Google Sign In
  const signInWithGoogle = async (idToken: string) => {
    try {
      console.log("🔐 Google Sign-In başlatılıyor...");
      const credential = GoogleAuthProvider.credential(idToken);
      const userCredential = await signInWithCredential(auth, credential);

      // Check if user exists in Firestore
      const userDoc = await getDoc(doc(db, "users", userCredential.user.uid));

      if (!userDoc.exists()) {
        // Create user profile if it doesn't exist (first time login)
        console.log("İlk giriş, Firestore profili oluşturuluyor...");
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

  // Facebook Sign In
  const signInWithFacebook = async (token: string) => {
    try {
      const credential = FacebookAuthProvider.credential(token);
      const userCredential = await signInWithCredential(auth, credential);

      // Check if user exists in Firestore
      const userDoc = await getDoc(doc(db, "users", userCredential.user.uid));

      if (!userDoc.exists()) {
        // Create user profile if it doesn't exist (first time login)
        console.log("İlk Facebook girişi, Firestore profili oluşturuluyor...");
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
      navigation.navigate("TabBar");
    } catch (error) {
      console.error("Firebase'e Facebook ile giriş sırasında hata:", error);
      Alert.alert(
        "Giriş Başarısız",
        "Facebook ile giriş yapılırken bir sorun oluştu."
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoArea}>
        <Text style={styles.text}>Hoşgeldiniz</Text>
        <View style={styles.imageArea}>
          <Image
            source={require("../../../assets/img.jpg")}
            style={styles.image}
          />
        </View>
      </View>

      <View style={styles.actionArea}>
        <Pressable style={styles.arrow} onPress={handleEmailSignIn}>
          <AntDesign name="arrowright" size={35} color="white" />
        </Pressable>
        <View style={styles.userArea}>
          <View>
            <Text style={{ fontSize: 24 }}>Üye Girişi</Text>
          </View>
          <View style={styles.inputArea}>
            <View style={styles.dataLine}>
              <FontAwesome6 name="envelope-open" size={20} color="black" />
              <TextInput
                placeholder="E-Mail"
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>
            <View style={styles.dataLine}>
              <FontAwesome6 name="key" size={20} color="black" />
              <TextInput
                placeholder="Şifre"
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
              />
            </View>
          </View>

          {/* Social Login Buttons */}
          <View style={styles.socialButtonsArea}>
            {/* Google Sign In Button */}
            <Pressable
              disabled={!googleRequest}
              onPress={() => {
                console.log("Google Sign-In button pressed");
                googlePromptAsync();
              }}
              style={({ pressed }) => [
                styles.socialButton,
                { backgroundColor: "#D1422B" },
                pressed && styles.socialButtonPressed,
                !googleRequest && styles.socialButtonDisabled,
              ]}>
              <AntDesign name="google" size={18} color="white" />
              <Text style={styles.socialButtonText}>Google ile Giriş</Text>
            </Pressable>

            {/* Facebook Sign In Button */}
            <Pressable
              disabled={!fbRequest}
              onPress={() => fbPromptAsync({ useProxy: true })}
              style={({ pressed }) => [
                styles.socialButton,
                { backgroundColor: "#3963C7" },
                pressed && styles.socialButtonPressed,
                !fbRequest && styles.socialButtonDisabled,
              ]}>
              <AntDesign name="facebook-square" size={18} color="white" />
              <Text style={styles.socialButtonText}>Facebook ile Giriş</Text>
            </Pressable>
          </View>

          <View style={styles.userButtonsArea}>
            <Pressable>
              <Text style={styles.buttonText}>Şifremi Unuttum</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("SignUp")}>
              <Text style={styles.buttonText}>Üye Ol</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#73c3dd",
  },
  logoArea: {
    flex: 3,
    backgroundColor: "#73c3dd",
  },
  text: {
    color: "white",
    fontFamily: "Poppins",
    fontSize: 40,
    fontWeight: "900",
    left: 30,
    top: (Dimensions.get("screen").height * 1) / 5,
    zIndex: 1,
  },
  imageArea: {
    alignItems: "flex-end",
    paddingTop: (height * 1) / 15,
    paddingRight: 10,
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 100,
  },
  actionArea: {
    flex: 2,
    backgroundColor: "#E5F4F2",
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    zIndex: 4,
  },
  userArea: {
    flex: 1,
    left: 30,
    top: -30,
    justifyContent: "space-between",
  },
  inputArea: {
    gap: 25,
  },
  dataLine: {
    flexDirection: "row",
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    marginRight: 60,
    paddingBottom: 10,
  },
  input: {
    fontSize: 17,
    marginLeft: 10,
    flex: 1,
  },
  socialButtonsArea: {
    flexDirection: "row",
    gap: 10,
    marginRight: 60,
    marginTop: 10,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    gap: 5,
    flex: 1,
  },
  socialButtonPressed: {
    opacity: 0.8,
  },
  socialButtonDisabled: {
    opacity: 0.5,
  },
  socialButtonText: {
    color: "white",
    fontSize: 12,
    fontWeight: "600",
  },
  userButtonsArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 60,
  },
  buttonText: {
    color: "#0092C9",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 15,
  },
  arrow: {
    backgroundColor: "#e5aebf",
    width: 72,
    height: 72,
    borderRadius: 36,
    justifyContent: "center",
    alignItems: "center",
    left: width * 0.66,
    top: -35,
    zIndex: 2,
  },
});
