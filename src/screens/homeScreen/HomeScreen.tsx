import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Svg, { Polygon } from "react-native-svg";

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
      <View style={styles.lastMeditation}>
        <View></View>
        <Text>Test</Text>
        <Text>Test</Text>
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
  lastMeditation: {
    backgroundColor: "#fff",
    margin: 15,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 30,
  },
});
