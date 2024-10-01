import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import datas from "../../utils/introTexts";
import Carousel from "../../components/Carousel";

const IntroScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={datas}
        renderItem={({ item }) => <Carousel item={item} />}
        horizontal
        showsHorizontalScrollIndicator
        pagingEnabled
      />
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
