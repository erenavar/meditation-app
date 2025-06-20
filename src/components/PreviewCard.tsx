import { ImageBackground, StyleSheet, Text, View } from "react-native";
import articles from "../../assets/blog/articles.json";
import { IInstance } from "./types";
import WhiteText from "./WhiteText";
import AntDesign from "@expo/vector-icons/AntDesign";

const PreviewCard = () => {
  const instance: IInstance = articles[0];
  const image = { uri: instance.images[0] };

  return (
    <ImageBackground style={styles.ImageBackground} source={image}>
      <WhiteText style={styles.title}>
        {instance.city} : {instance.title}
      </WhiteText>
      <View style={styles.line}></View>
      <WhiteText style={styles.date}>{instance.publishedAt}</WhiteText>
      <View style={styles.iconArea}>
        <AntDesign name="right" size={26} color="black" />
      </View>
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
