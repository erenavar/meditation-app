import { Animated, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import datas from "../../utils/introTexts";
import Carousel from "../../components/Carousel";
import Paginator from "../../components/Paginator";
import introTexts from "../../utils/introTexts";

const IntroScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const viewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: any }) => {
      setCurrentIndex(viewableItems[0].index);
    }
  );
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  console.log("currentIndex :>> ", currentIndex);
  return (
    <View style={styles.container}>
      <View style={{ flex: 3 }}>
        <FlatList
          data={datas}
          renderItem={({ item }) => <Carousel item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged.current}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
      <Paginator data={introTexts} scrollX={scrollX} />
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "73c3dd",
  },
});
