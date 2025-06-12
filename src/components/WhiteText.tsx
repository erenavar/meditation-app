import { StyleSheet, Text, TextProps, View } from "react-native";
import React, { FC } from "react";

interface IProps extends TextProps {}

const WhiteText: FC<IProps> = (props) => {
  return (
    <View>
      <Text {...props} style={[{ color: "white" }, props.style]}>
        {props.children}
      </Text>
    </View>
  );
};

export default WhiteText;

const styles = StyleSheet.create({});
