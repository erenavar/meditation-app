import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import articles from "../../assets/blog/articles.json";
import { IInstance } from "./types";
import WhiteText from "./WhiteText";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";

const PreviewCard = () => {
  const instance: IInstance = articles[0];
  const image = { uri: instance.images[0] };

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ImageBackground style={styles.ImageBackground} source={image}>
      <WhiteText style={styles.title}>{instance.title}</WhiteText>
      <View style={styles.line}></View>
      <WhiteText style={styles.date}>{instance.publishedAt}</WhiteText>
      <TouchableOpacity
        style={styles.iconArea}
        onPress={() => navigation.navigate("Article", { name: instance.city })}>
        <AntDesign name="right" size={26} color="black" />
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default PreviewCard;

const styles = StyleSheet.create({
  ImageBackground: {
    height: 300,
    width: "100%",
    marginBottom: 20,
  },
  title: {
    width: "90%",
    fontSize: 30,
    marginVertical: 20,
    marginHorizontal: 15,
  },
  line: {
    borderBottomWidth: 4,
    borderBottomColor: "white",
    opacity: 0.6,
    width: 60,
    marginLeft: 15,
  },
  date: {
    marginLeft: 15,
    marginTop: 20,
  },
  iconArea: {
    backgroundColor: "#FAFCFD",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 50,
    alignSelf: "flex-end",
    marginTop: "auto",
    marginBottom: 20,
    marginRight: 20,
    borderRadius: 30,
  },
  icon: {},
});
