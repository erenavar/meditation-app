import React from "react";
import { Dimensions, SafeAreaView, StyleSheet, View } from "react-native";
import Input from "../../components/Input";
import AntDesign from "@expo/vector-icons/AntDesign";

const { width, height } = Dimensions.get("window");

const SignUpScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AntDesign
        name="arrowleft"
        size={34}
        color="black"
        style={styles.arrow}
      />
      <Input />
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: width * 0.04,
  },
  arrow: {
    marginTop: height * 0.04,
  },
});
