import React from "react";
import { Share, Button, TouchableOpacity, Alert } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const ShareButton = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: "Paylas",
      });
      //   if (result.action === Share.sharedAction) {
      //     if (result.activityType) {
      //       Alert.alert("Kopyalandi");
      //     } else {
      //       Alert.alert("test");
      //     }
      //   } else if (result.action === Share.dismissedAction) {
      //   }
    } catch (error: any) {
      Alert.alert(error.message);
      console.log(error.message);
    }
  };
  return (
    <TouchableOpacity onPress={onShare}>
      <Ionicons name="share-outline" size={20} color="black" />
    </TouchableOpacity>
  );
};

export default ShareButton;
