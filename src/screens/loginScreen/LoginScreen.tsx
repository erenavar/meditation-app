import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.logoArea}>
        <Text style={styles.text}>Welcome</Text>
        <View style={styles.imageArea}>
          <Image
            source={require("../../../assets/loginImage.jpg")}
            style={styles.image}
          />
        </View>
      </View>
      <View style={styles.actionArea}>
        <View style={styles.userArea}>
          <View>
            <Text>Please Sign-In</Text>
          </View>
          <View style={styles.inputArea}>
            <View>
              <TextInput placeholder="Test" />
            </View>
            <View>
              <TextInput placeholder="Test2" />
            </View>
          </View>
          <View>
            <Pressable>
              <Text>Forgot password</Text>
            </Pressable>
            <Pressable>
              <Text>Sign Up</Text>
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
  },
  imageArea: {
    alignItems: "flex-end",
    paddingTop: (Dimensions.get("window").height * 1) / 15,
    paddingRight: 10,
    zIndex: -1,
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
  },
  userArea: {
    flex: 1,
    left: 30,
    justifyContent: "space-around",
  },
  inputArea: {},
});
