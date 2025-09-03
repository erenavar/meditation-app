import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import MeditationFilter from "../../components/MeditationFilter";
import MeditationCard from "../../components/MeditationCard";
import { getMeditations, Meditation } from "../../services/meditationService";

const MeditationScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [meditations, setMeditations] = useState<Meditation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMeditations(selectedCategory);
  }, [selectedCategory]);

  const loadMeditations = async (category: string) => {
    setLoading(true);
    const data = await getMeditations(category);
    setMeditations(data);
    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <MeditationFilter onTabChange={setSelectedCategory} />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.categoryTitle}>
          {selectedCategory === "ALL" ? "All Meditations" : selectedCategory}
        </Text>

        {loading ? (
          <ActivityIndicator
            size="large"
            color="#73c3dd"
            style={styles.loader}
          />
        ) : (
          <>
            <Text style={styles.resultCount}>
              {meditations.length} meditation
              {meditations.length !== 1 ? "s" : ""} found
            </Text>

            {meditations.map((meditation) => (
              <MeditationCard
                key={meditation.id}
                title={meditation.title}
                duration={meditation.duration}
                imageUrl={meditation.imageUrl}
                category={meditation.category}
              />
            ))}
          </>
        )}
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
  loader: {
    marginTop: 50,
  },
});
