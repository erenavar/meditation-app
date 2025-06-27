import { Image, StyleSheet, View } from "react-native";
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
      <Image></Image>
      <View></View>
    </View>
  );
};

export default PreviewCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "30%",
    borderRadius: 20,
  },
});
