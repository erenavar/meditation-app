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
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

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
            <Text style={{ fontSize: 24 }}>Please Sign-In</Text>
          </View>
          <View style={styles.inputArea}>
            <View style={styles.dataLine}>
              <FontAwesome6 name="envelope-open" size={20} color="black" />
              <TextInput placeholder="E-Mail" style={styles.input} />
            </View>
            <View style={styles.dataLine}>
              <FontAwesome6 name="key" size={20} color="black" />
              <TextInput placeholder="Şifre" style={styles.input} />
            </View>
          </View>
          <View style={styles.userButtonsArea}>
            <Pressable>
              <Text>Şifremi Unuttum</Text>
            </Pressable>
            <Pressable>
              <Text>Giriş</Text>
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
  },
  userButtonsArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 60,
  },
});
