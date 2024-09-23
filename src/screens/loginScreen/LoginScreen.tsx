import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text>LoginScreen</Text>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
