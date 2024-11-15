import React from "react";
import { Pressable, PressableProps, StyleSheet, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

interface IProps extends PressableProps {
  title: string;
  onPress: () => void;
}

export default function Button({ title, onPress }: IProps) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
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
