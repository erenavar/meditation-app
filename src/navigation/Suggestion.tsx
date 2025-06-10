import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";

const Suggestion = () => {
  return (
    <View style={{ height: "30%" }}>
      <ImageBackground
        source={require("../../assets/suggestionBg.jpg")}
        style={styles.container}>
        <Text>Suggestion</Text>
      </ImageBackground>
    </View>
  );
};

export default Suggestion;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "purple",
    height: "100%",
    width: "100%",
  },
});
