import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoArea}>
        <Text style={styles.text}>Welcome</Text>
      </View>
      <View style={styles.actionArea}></View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoArea: {
    flex: 3,
    backgroundColor: "#0092C9",
  },
  text: {
    color: "white",
    fontFamily: "Poppins",
    fontSize: 40,
    fontWeight: "900",
    left: 40,
    top: 160,
  },
  actionArea: {
    flex: 2,
    backgroundColor: "pink",
  },
});
