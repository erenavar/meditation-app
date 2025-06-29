import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import articles from "../../../assets/blog/articles.json";
import Animated, {
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
  interpolate,
} from "react-native-reanimated";

const { width } = Dimensions.get("screen");

const ArticleScreen = ({}) => {
  const instance = articles[0];
  const image = { uri: instance.images[0] };

  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const animatedImageStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(scrollOffset.value, [0, 300, 600], [1, 1.2, 1]),
        },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <View style={{ marginHorizontal: 15 }}>
        <Animated.Image
          source={image}
          style={[styles.img, animatedImageStyle]}
          resizeMode="cover"
        />
      </View>
      <ScrollView
        ref={scrollRef}
        showsVerticalScrollIndicator={false}
        style={{
          paddingHorizontal: 15,
          borderRadius: 20,
          backgroundColor: "white",
        }}>
        <View>
          <Text style={styles.title}>{instance.title}</Text>
          <Text style={styles.date}>{instance.publishedAt}</Text>
          <Text style={styles.desc}>{instance.description}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ArticleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5F4F2",
  },
  img: {
    width: "100%",
    height: width / 1.5,
  },
  title: {
    fontSize: 39,
    marginTop: 30,
  },
  date: { marginVertical: 20, color: "#B4B5BC", fontSize: 17 },
  desc: {
    fontSize: 24,
    borderRadius: 20,
  },
});
