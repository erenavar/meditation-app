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
        <Text>{today}</Text>
      </View>
      <View style={styles.lastMeditationArea}>
        <View style={styles.iconWrapper}>
          <PentagonIcon />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.mainText}>Gunluk Meditasyon</Text>
          <Text style={styles.dateText}>26 Sub 2025</Text>
        </View>

        <View style={styles.rightTextContainer}>
          <Text style={styles.categoryText}>Uyku</Text>
          <Text style={styles.durationText}>5 Dakika</Text>
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
    backgroundColor: "#fff",
    margin: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 15,
    justifyContent: "space-between",
  },
  iconWrapper: {
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  mainText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  dateText: {
    fontSize: 14,
    color: "#666",
  },
  rightTextContainer: {
    alignItems: "flex-end",
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#333",
  },
  durationText: {
    fontSize: 14,
    color: "#666",
  },
});
