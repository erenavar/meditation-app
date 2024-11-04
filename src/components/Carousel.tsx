import { Dimensions, StyleSheet, View, Image, Text } from "react-native";
import React from "react";
import { IIntroProps } from "../utils/types";

const Carousel = ({ item }: { item: IIntroProps }) => {
  const { width } = Dimensions.get("window");

  return (
    <View>
      <Image
        source={item.image}
        style={[styles.image, { width, resizeMode: "contain" }]}
      />
      <View style={{ flex: 0.4 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description} numberOfLines={3}>
          {item.description}
        </Text>
      </View>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  image: {
    flex: 0.7,
    justifyContent: "center",
    marginBottom: -80,
  },
  title: {
    fontWeight: "800",
    fontSize: 28,
    textAlign: "center",
    marginBottom: 20,
  },
  description: {
    fontWeight: "300",
    color: "#62656b",
    textAlign: "center",
    paddingHorizontal: 64,
    width: Dimensions.get("window").width,
  },
});
