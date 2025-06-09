import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { PentagonIcon } from "../../components/PentagonIcon";

const HomeScreen = () => {
  let date = new Date();
  let today =
    date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();

  return (
    <View style={styles.container}>
      <View style={styles.dateLine}>
        <Text>Son Ziyaret: 3-8-2020</Text>
        <Text>Tarih: {today}</Text>
      </View>
      <View style={styles.lastMeditationArea}>
        <View style={styles.iconWrapper}>
          <PentagonIcon />
          <View style={styles.info}>
            <Text style={styles.name}>Gunluk Meditasyon</Text>
            <Text style={styles.meditationDate}>16 Sub 2025</Text>
          </View>
        </View>
        <View style={styles.info2}>
          <Text style={styles.genre}>SLEEP</Text>
          <Text style={styles.duration}>5 Minutes</Text>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5F4F2",
  },
  dateLine: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  lastMeditationArea: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    margin: 15,
    borderRadius: 13,
    backgroundColor: "#fff",
  },
  iconWrapper: {
    marginRight: 10,
    flexDirection: "row",
  },
  info: {
    justifyContent: "center",
    marginLeft: 10,
    lineHeight: 100,
  },
  name: {
    lineHeight: 25,
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: 0.5,
  },
  meditationDate: {
    color: "#76908E",
    fontSize: 14,
    letterSpacing: 0.5,
  },

  info2: { justifyContent: "center" },
  genre: {},
  duration: {},
});
