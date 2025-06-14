import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";

const MeditationCard = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={{ uri: "https://picsum.photos/100" }}>
        <Text>Test</Text>
      </ImageBackground>
      <View style={styles.infoArea}>
        <Text style={styles.meditationName}>Icindeki Devi Uyandir</Text>
        <Text>17 Dakika</Text>
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
  image: { flex: 1, height: 100, width: 100 },
  infoArea: {
    flex: 4,
    marginLeft: 50,
  },
  meditationName: {
    fontSize: 20,
  },
});
