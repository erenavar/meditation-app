import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LastMeditation from "../../components/LastMeditation";
import Suggestion from "../../navigation/Suggestion";

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
      <LastMeditation />
      <Suggestion />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5F4F2",
    padding: 15,
  },
  dateLine: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
