import React, { FC } from "react";
import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import SignUpForm from "../../components/SignUpForm";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";
import { StackNavigationProp } from "@react-navigation/stack";

type Props = NativeStackScreenProps<RootStackParamList, "SignUp">;

const { width, height } = Dimensions.get("window");

const SignUpScreen: FC<Props> = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
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
            Or sign in with
          </Text>
          <View style={styles.line}></View>
        </View>
        <Pressable style={[styles.button, { backgroundColor: "#3963C7" }]}>
          <AntDesign name="facebook-square" size={20} color="white" />
          <Text style={styles.buttonText}>Sign up with Facebook</Text>
        </Pressable>
        <Pressable style={[styles.button, { backgroundColor: "#D1422B" }]}>
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
  buttonText: { color: "white", fontWeight: "600" },
  bottomLine: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 40,
  },
});
