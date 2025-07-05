import React, { useEffect } from "react";
import { Share, TouchableOpacity, Alert, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  toast,
  ToastPosition,
  Toasts,
} from "@backpackapp-io/react-native-toast";

const ShareButton = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: "Paylas",
      });
      if (result.action === Share.sharedAction) {
        toast.success("Kopyalandı", {
          position: ToastPosition.TOP,
          width: 200,
          duration: 500,
        });
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error: any) {
      Alert.alert(error.message);
      console.log(error.message);
    }
  };
  return (
    <>
      <Toasts />
      <TouchableOpacity onPress={onShare}>
        <Ionicons name="share-outline" size={20} color="black" />
      </TouchableOpacity>
    </>
  );
};

export default ShareButton;
