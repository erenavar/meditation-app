import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import WhiteText from "../components/WhiteText";

const Suggestion = () => {
  return (
    <View>
      <ImageBackground
        resizeMode="stretch"
        source={require("../../assets/suggestionBg.jpg")}
        style={styles.container}>
        <View>
          <WhiteText>Test</WhiteText>
          <WhiteText>Test</WhiteText>
        </View>
        <View>
          {" "}
          <WhiteText>Test</WhiteText>
        </View>
        <View>
          {" "}
          <WhiteText>Test</WhiteText>
          <WhiteText>Test</WhiteText>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Suggestion;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "purple",
    height: 300,
    width: "100%",
    borderRadius: 16,
    overflow: "hidden",
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  label1: {},
});
