import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import articles from "../../assets/blog/articles.json";
import { IInstance } from "./types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";

const PreviewCard = () => {
  const instance: IInstance = articles[0];

  const image = { uri: instance.images[0] };

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <View style={styles.imgArea}>
        <Image source={image} style={styles.img} resizeMode="stretch" />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Article", { name: instance.city });
        }}>
        <View style={styles.titleArea}>
          <Text style={styles.title}>{instance.title}</Text>
          <Text style={styles.date}>{instance.publishedAt}</Text>
        </View>
        <Text
          numberOfLines={3}
          style={{ marginTop: 10, fontSize: 14, lineHeight: 20 }}>
          {instance.description}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PreviewCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    aspectRatio: 0.7,
    borderRadius: 20,
    padding: 10,
  },
  imgArea: {
    width: "100%",
    height: "70%",
  },
  img: {
    width: "100%",
    height: "90%",
    borderRadius: 10,
  },
  titleArea: {
    flexDirection: "row",
    marginVertical: 5,
  },
  title: {
    fontWeight: "bold",
    letterSpacing: 0.1,
    fontSize: 16,
    flex: 3,
  },
  date: {
    flex: 1,
    left: "auto",
    color: "gray",
  },
});
