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
        <View style={[styles.recommendationHeader, { marginLeft: 10 }]}>
          <WhiteText>Test</WhiteText>
          <WhiteText>Test</WhiteText>
        </View>
        <View>
          {" "}
          <WhiteText>Test</WhiteText>
        </View>
        <View>
          {" "}
          <WhiteText style={[styles.name, { marginLeft: 10 }]}>
            Nasil Meditasyon Yapilir
          </WhiteText>
          <WhiteText style={[styles.duration, { marginLeft: 10 }]}>
            29 Dakika
          </WhiteText>
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
    paddingVertical: 20,
    justifyContent: "space-between",
  },
  recommendationHeader: { flexDirection: "row", gap: 10 },
  label1: {},
  name: {
    fontWeight: "bold",
    fontSize: 24,

    marginBottom: 8,
  },
  duration: {
    fontWeight: "bold",
  },
});
