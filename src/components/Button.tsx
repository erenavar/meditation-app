import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
  Text,
} from "react-native";

interface IProps extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
}

export default function Button({ title, onPress }: IProps) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.7}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "dodgerblue",
    borderRadius: 50,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 300,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    letterSpacing: 1.5,
    fontSize: 18,
  },
});
