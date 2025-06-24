import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import articles from "../../../assets/blog/articles.json";

const { width } = Dimensions.get("screen");

const ArticleScreen = ({}) => {
  const instance = articles[0];
  const image = { uri: instance.images[0] };

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.img} />
      <Text>{instance.title}</Text>
    </View>
  );
};

export default ArticleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFCFD",
    marginHorizontal: 15,
  },
  img: {
    width: "auto",
    height: width / 1.5,
  },
});
