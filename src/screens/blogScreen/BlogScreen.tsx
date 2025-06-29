import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import PreviewCard from "../../components/PreviewCard";

const BlogScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <PreviewCard />
          <PreviewCard />
          <PreviewCard />
          <PreviewCard />
          <PreviewCard />
          <PreviewCard />
        </View>
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
    gap: 20,
  },
});
