import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Svg, { Polygon } from "react-native-svg";
import { IPentagonItem } from "./types";

export const PentagonIcon = (props: IPentagonItem) => (
  <View style={styles.container}>
    <Svg
      width={70}
      height={70}
      viewBox="0 0 100 100"
      style={[styles.pentagon, { opacity: props.opacity }]}>
      <Polygon points="50,10 90,40 75,90 25,90 10,40" fill="#F07167" />
    </Svg>

    <MaterialCommunityIcons
      name={props.iconName}
      size={24}
      color="black"
      style={styles.icon}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  pentagon: {
    position: "absolute",
  },
  icon: {},
});
