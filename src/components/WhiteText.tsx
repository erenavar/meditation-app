import { StyleSheet, Text, TextProps, View } from "react-native";
import React, { FC } from "react";

interface IProps extends TextProps {
  children: string;
}

const WhiteText = ({ ...props }: IProps) => {
  return (
    <View>
      <Text {...props} style={{ color: "white" }}></Text>
    </View>
  );
};

export default WhiteText;

const styles = StyleSheet.create({});
