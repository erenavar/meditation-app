import React, { useRef, FC } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  Animated,
  ImageSourcePropType,
} from "react-native";
import { IInstance } from "../../components/types";
import articles from "../../../assets/blog/articles.json";
import { CompositeScreenProps } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList, TabParamList } from "../../navigation/types";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import ShareButton from "../../components/ShareButton";

const IMAGE_HEIGHT: number = Dimensions.get("window").height * 0.4;

type Props = CompositeScreenProps<
  StackScreenProps<RootStackParamList, "Article">,
  BottomTabScreenProps<TabParamList>
>;

const PreviewCard: FC<Props> = ({ route }) => {
  const instance: IInstance = articles[0];
  const image: ImageSourcePropType = { uri: instance.images[0] };

  const article = route.params.props;

  const scrollY = useRef(new Animated.Value(0)).current;
  const imageTranslateY = scrollY.interpolate({
    inputRange: [0, IMAGE_HEIGHT],
    outputRange: [0, IMAGE_HEIGHT * 0.5],
    extrapolate: "clamp",
  });
  const imageOpacity = scrollY.interpolate({
    inputRange: [0, IMAGE_HEIGHT * 0.8],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  return (
    <SafeAreaView style={styles.wrapper}>
      <Animated.ScrollView
        stickyHeaderIndices={[1]}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}>
        <Animated.Image
          source={{ uri: article.images[0] }}
          style={[
            styles.image,
            {
              transform: [{ translateY: imageTranslateY }],
              opacity: imageOpacity,
            },
          ]}
        />
        <View style={styles.stickyHeader}>
          <Text style={styles.title}>{article.title}</Text>
          <View style={styles.center}>
            <Text style={styles.date}>{article.publishedAt}</Text>
            <ShareButton />
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.body}>{article.description}</Text>
        </View>
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default PreviewCard;
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  image: {
    height: IMAGE_HEIGHT,
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 0,
  },
  stickyHeader: {
    marginTop: IMAGE_HEIGHT,
    padding: 20,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    zIndex: 1,
  },
  content: {
    padding: 20,
    backgroundColor: "white",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  center: { flexDirection: "row", gap: 10, alignItems: "center" },
  date: {
    fontSize: 14,
    color: "gray",
    alignSelf: "flex-end",
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
  },
});
