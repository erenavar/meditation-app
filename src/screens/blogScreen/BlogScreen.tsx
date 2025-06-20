import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PreviewCard from "../../components/PreviewCard";

const BlogScreen = () => {
  return (
    <View style={styles.container}>
      <PreviewCard />
    </View>
  );
};

export default BlogScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
  },
});
