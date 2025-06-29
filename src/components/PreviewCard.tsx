import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IInstance } from "./types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";

const PreviewCard = (props: IInstance) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <View style={styles.imgArea}>
        <Image
          source={{ uri: props.images[0] }}
          style={styles.img}
          resizeMode="stretch"
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Article", { name: props.city });
        }}>
        <View style={styles.titleArea}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.date}>{props.publishedAt}</Text>
        </View>
        <Text numberOfLines={3} style={styles.desc}>
          {props.description}
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
    aspectRatio: 0.8,
    borderRadius: 20,
    padding: 10,
    marginBottom: 30,
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
  desc: { marginTop: 10, marginBottom: 50, fontSize: 14, lineHeight: 20 },
});
