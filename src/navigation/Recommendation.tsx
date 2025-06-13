import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import WhiteText from "../components/WhiteText";
import { PentagonIcon } from "../components/PentagonIcon";

const Suggestion = () => {
  return (
    <View>
      <ImageBackground
        resizeMode="stretch"
        source={require("../../assets/suggestionBg.jpg")}
        style={styles.container}>
        <View style={[styles.labelArea, { marginLeft: 10 }]}>
          <WhiteText style={[styles.label, { backgroundColor: "#000" }]}>
            RECOMMEND
          </WhiteText>
          <WhiteText style={[styles.label, { backgroundColor: "#0092C9" }]}>
            SLEEP
          </WhiteText>
        </View>
        <View style={{ alignSelf: "center" }}>
          <PentagonIcon iconName="play" opacity={0.7} />
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
    marginTop: 15,
    borderRadius: 16,
    overflow: "hidden",
    paddingVertical: 20,
    justifyContent: "space-between",
  },
  labelArea: { flexDirection: "row", gap: 10 },
  label: {
    fontSize: 12,
    fontWeight: "900",
    paddingVertical: 5,
    paddingHorizontal: 25,
    borderRadius: 5,
  },

  name: {
    fontWeight: "bold",
    fontSize: 24,

    marginBottom: 8,
  },
  duration: {
    fontWeight: "bold",
  },
});
