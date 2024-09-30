import { Dimensions, StyleSheet, View, Image } from "react-native";
import React from "react";
import { IIntroProps } from "../utils/types";

const Carousel = (props: IIntroProps) => {
  const { width } = Dimensions.get("window");
  return (
    <View>
      <Image source={props.image} />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({});
