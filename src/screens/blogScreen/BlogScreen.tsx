import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import React from "react";
import PreviewCard from "../../components/PreviewCard";

const BlogScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
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
    backgroundColor: "#E5F4F2",
    padding: 30,
  },
});
