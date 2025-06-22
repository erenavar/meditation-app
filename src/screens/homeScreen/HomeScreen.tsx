import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import LastMeditation from "../../components/LastMeditation";
import Suggestion from "../../components/Recommendation";
import MeditationCard from "../../components/MeditationCard";

const HomeScreen = () => {
  let date = new Date();
  let today =
    date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.dateLine}>
        <Text>Son Ziyaret: 3-8-2020</Text>
        <Text>Tarih: {today}</Text>
      </View>
      <LastMeditation />
      <Suggestion />

      <View style={styles.allMeditations}>
        <Text style={styles.title}>All Meditations</Text>

        {[...Array(4)].map((_, i) => (
          <MeditationCard key={i} />
        ))}
      </View>
    </ScrollView>
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
  allMeditations: {
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 800,
    letterSpacing: 0.8,
  },
});
