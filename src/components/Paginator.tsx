import { Animated, StyleSheet, useWindowDimensions, View } from "react-native";
import React from "react";

const Paginator = ({ data, scrollX }: { data: any; scrollX: any }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={{ flexDirection: "row", height: 64 }}>
      {data.map((item: any, i: number) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: "clamp",
        });

        return <Animated.View style={[styles.dot, { width: dotWidth }]} />;
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
    backgroundColor: "#73c3dd",
    marginHorizontal: 8,
  },
});
