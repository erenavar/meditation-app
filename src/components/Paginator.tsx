import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { IIntroProps } from "../utils/types";

const Paginator = ({ data }: IIntroProps) => {
  return (
    <View style={{ flexDirection: "row", height: 64 }}>
      {data.map((item: any, i: number) => {
        console.log("item :>> ", item);
        return <View style={[styles.dot, { width: 10 }]} />;
      })}
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 64,
  },
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: "#493d8a",
    marginHorizontal: 8,
  },
});
