import { Dimensions, StyleSheet, View, Image, Text } from "react-native";
import React from "react";
import { IIntroProps } from "../utils/types";

const Carousel = ({ item }: { item: IIntroProps }) => {
  const { width } = Dimensions.get("window");
  console.log("item :>> ", item);
  return (
    <View>
      <Image
        source={item.image}
        style={[styles.image, { width, resizeMode: "contain" }]}
      />
      <View style={{ flex: 0.3 }}>
        <Text>{item.title}</Text>
      </View>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  image: {
    flex: 0.7,
    justifyContent: "center",
  },
});
