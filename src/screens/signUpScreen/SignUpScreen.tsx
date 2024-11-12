import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Input from "../../components/Input";
import AntDesign from "@expo/vector-icons/AntDesign";
import { SafeAreaView } from "react-native-safe-area-context";

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
      <View style={styles.textArea}>
        <Text style={styles.text}>Create An Account</Text>
      </View>
      <View style={styles.inputArea}>
        <Input icon={"user"} placeholder={"Name"} />
      </View>
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
    marginTop: height * 0.02,
  },
});
