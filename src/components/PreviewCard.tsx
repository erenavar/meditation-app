import { ImageBackground, StyleSheet, Text, View } from "react-native";
import articles from "../../assets/blog/articles.json";
import WhiteText from "./WhiteText";

const PreviewCard = () => {
  const instance = articles[0];
  const image = { uri: instance.images[0] };
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.ImageBackground} source={image}>
        <WhiteText style={styles.title}>{instance.title}</WhiteText>
      </ImageBackground>
    </View>
  );
};

export default PreviewCard;

const styles = StyleSheet.create({
  container: {
    width: "47%",
    flexDirection: "row",
    marginLeft: "2%",
    marginBottom: 5,
  },
  ImageBackground: {
    width: "100%",
    height: 150,
  },
  title: {
    marginTop: 5,
    marginLeft: 5,
  },
});

// import {
//   ImageBackground,
//   StyleSheet,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import articles from "../../assets/blog/articles.json";
// import { IInstance } from "./types";
// import WhiteText from "./WhiteText";
// import AntDesign from "@expo/vector-icons/AntDesign";
// import { useNavigation } from "@react-navigation/native";
// import { NativeStackNavigationProp } from "@react-navigation/native-stack";
// import { RootStackParamList } from "../navigation/types";

// const PreviewCard = () => {
//   const instance: IInstance = articles[0];
//   const image = { uri: instance.images[0] };

//   const navigation =
//     useNavigation<NativeStackNavigationProp<RootStackParamList>>();

//   return (
//     <View style={{ flexDirection: "row", flexWrap: "wrap-reverse" }}>
//       <ImageBackground style={styles.ImageBackground} source={image}>
//         <WhiteText style={styles.title}>{instance.title}</WhiteText>
//         <View style={styles.line}></View>
//         <WhiteText style={styles.date}>{instance.publishedAt}</WhiteText>
//         <TouchableOpacity
//           style={styles.iconArea}
//           onPress={() =>
//             navigation.navigate("Article", { name: instance.city })
//           }>
//           <AntDesign name="right" size={13} color="black" />
//         </TouchableOpacity>
//       </ImageBackground>
//     </View>
//   );
// };

// export default PreviewCard;

// const styles = StyleSheet.create({
//   ImageBackground: {
//     height: 150,
//     width: "60%",
//     marginBottom: 20,
//   },
//   title: {
//     width: "45%",
//     fontSize: 15,
//     marginVertical: 10,
//     marginHorizontal: 7,
//   },
//   line: {
//     borderBottomWidth: 4,
//     borderBottomColor: "white",
//     opacity: 0.6,
//     width: 60,
//     marginLeft: 15,
//   },
//   date: {
//     marginLeft: 7,
//     marginTop: 10,
//   },
//   iconArea: {
//     backgroundColor: "#FAFCFD",
//     justifyContent: "center",
//     alignItems: "center",
//     height: 25,
//     width: 25,
//     alignSelf: "flex-end",
//     marginTop: "auto",
//     marginBottom: 10,
//     marginRight: 95,
//     borderRadius: 15,
//   },
//   icon: {},
// });
