import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Svg, { Polygon } from "react-native-svg";

export const PentagonIcon = () => (
  <View style={styles.container}>
    <Svg width={70} height={70} viewBox="0 0 100 100" style={styles.pentagon}>
      <Polygon points="50,10 90,40 75,90 25,90 10,40" fill="#F07167" />
    </Svg>

    <MaterialCommunityIcons
      name="weather-sunset"
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
