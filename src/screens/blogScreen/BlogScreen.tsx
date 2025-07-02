import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import PreviewCard from "../../components/PreviewCard";
import articles from "../../../assets/blog/articles.json";

const BlogScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        {articles.map((article) => (
          <PreviewCard
            key={article.id}
            city={article.city}
            title={article.title}
            description={article.description}
            images={article.images}
            publishedAt={article.publishedAt}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default BlogScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#E5F4F2",
    padding: 20,
    gap: 10,
  },
});
