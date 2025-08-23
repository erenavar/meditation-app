import { Text, ScrollView, StyleSheet, SafeAreaView } from "react-native";
import React, { useState } from "react";
import MeditationFilter from "../../components/MeditationFilter";
import MeditationCard from "../../components/MeditationCard";

const MeditationScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState("SLEEP");

  const meditations = {
    SLEEP: [1, 2],
    ANXIETY: [1, 2, 3],
    STRESS: [1],
    FOCUS: [1, 2, 3, 4],
  };

  const getMeditations = () => {
    return meditations[selectedCategory as keyof typeof meditations] || [];
  };

  return (
    <SafeAreaView style={styles.container}>
      <MeditationFilter onTabChange={setSelectedCategory} />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.categoryTitle}>
          {selectedCategory === "SLEEP" ? "SLEEP" : selectedCategory}
        </Text>

        <Text style={styles.resultCount}>
          {getMeditations().length} meditation
          {getMeditations().length !== 1 ? "s" : ""} found
        </Text>
        {getMeditations().map((_, index) => (
          <MeditationCard key={`${selectedCategory}-${index}`} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MeditationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5F4F2",
  },
  content: {
    flex: 1,
    paddingHorizontal: 15,
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: "800",
    letterSpacing: 0.8,
    marginTop: 20,
    marginBottom: 10,
  },
  resultCount: {
    fontSize: 14,
    color: "#76908E",
    marginBottom: 20,
  },
});
