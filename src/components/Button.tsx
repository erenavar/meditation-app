import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

interface IProps extends PressableProps {
  title: string;
}

export default function Button(props: IProps) {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "dodgerblue",
    borderRadius: 50,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    width: 200,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    letterSpacing: 1.5,
    fontSize: 18,
  },
});
