import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import WhiteText from "./WhiteText";
import { MeditationCardProps } from "./types";

const MeditationCard: FC<MeditationCardProps> = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={styles.image}
        source={require("../../assets/card-image.jpg")}>
        <WhiteText style={styles.label}>Test</WhiteText>
      </ImageBackground>
      <View style={styles.infoArea}>
        <Text style={styles.meditationName}>Icindeki Devi Uyandir</Text>
        <Text style={styles.duration}>17 Dakika</Text>
      </View>
    </View>
  );
};

export default MeditationCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 30,
  },
  image: {
    display: "flex",
    flex: 2,
    height: 100,
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
  },
  label: {
    textAlign: "center",
    backgroundColor: "#0092C9",
    width: "100%",
    fontWeight: "700",
  },
  infoArea: {
    flex: 4,
    marginLeft: 30,
    justifyContent: "center",
    gap: 10,
    marginBottom: 20,
  },
  meditationName: {
    fontSize: 20,
  },
  duration: {
    color: "#76908E",
    fontSize: 14,
  },
});
