import { Image, StyleSheet, Text, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.personalArea}>
        <Image
          source={require("../../../assets/flower.jpg")}
          style={styles.profilePic}
        />
        <Text style={styles.userName}>Ceren Avar</Text>
        <Feather
          name="settings"
          size={24}
          color="#0092C9"
          style={{ marginLeft: "auto", alignSelf: "center" }}
        />
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5F4F2",
    padding: 15,
  },
  personalArea: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  profilePic: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  userName: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "600",
    letterSpacing: 0.3,
    marginLeft: 15,
  },
});
