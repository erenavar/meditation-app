import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import datas from "../../utils/introTexts";
import Carousel from "../../components/Carousel";

const IntroScreen = () => {
  return (
    <View>
      <FlatList
        data={datas}
        renderItem={({ item }) => <Carousel item={item} />}
      />
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({});

