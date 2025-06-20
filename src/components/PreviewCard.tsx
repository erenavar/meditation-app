import { ImageBackground, StyleSheet, Text, View } from "react-native";
import articles from "../../assets/blog/articles.json";
import { IInstance } from "./types";

const PreviewCard = () => {
  const instance: IInstance = articles[0];
  const image = { uri: instance.images[0] };

  return (
    <ImageBackground source={image} style={styles.image}>
      <Text style={styles.title}>
        {instance.city} : {instance.title}
      </Text>
    </ImageBackground>
  );
};

export default PreviewCard;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 201,
    width: "40%",
  },
  title: {
    color: "white",
    fontSize: 20,
    width: "auto",
  },
});
