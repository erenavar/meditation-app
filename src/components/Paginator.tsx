import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Paginator = ({ data }) => {
  return (
    <View>
      {data.map((_:any, i:number) => {
        return <View style={styles.dot} key={i.toString()} />;
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
    backgroundColor: "493d8a",
    marginHorizontal: 8,
  },
});
