import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import PreviewCard from "../../components/PreviewCard";

const BlogScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <PreviewCard />
        <PreviewCard />
        <PreviewCard />
        <PreviewCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default BlogScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5F4F2",
    padding: 20,
    gap: 20,
  },
});
