import { SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";
import React from "react";
import PreviewCard from "../../components/PreviewCard";

const BlogScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        <PreviewCard />
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
    height: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
});
