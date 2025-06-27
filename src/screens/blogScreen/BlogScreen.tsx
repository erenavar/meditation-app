import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import PreviewCard from "../../components/PreviewCard";

const BlogScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <PreviewCard />
      </View>
    </SafeAreaView>
  );
};

export default BlogScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5F4F2",
    padding: 20,
  },
});
