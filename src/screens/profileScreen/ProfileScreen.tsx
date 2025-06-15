import { Image, StyleSheet, Text, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import Line from "../../components/Line";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.personalArea}>
        <Image
          source={require("../../../assets/flower.jpg")}
          style={styles.profilePic}
        />
        <Text style={styles.userName}>Ceren Avarr</Text>
        <Feather
          name="settings"
          size={24}
          color="#0092C9"
          style={{ marginLeft: "auto", alignSelf: "center" }}
        />
      </View>
      <View style={styles.infos}>
        <View style={styles.line}>
          <Feather name="star" size={30} color="black" />
          <Text style={{ fontSize: 20, letterSpacing: 0.5 }}>Subscription</Text>
          <Feather
            name="arrow-right"
            size={24}
            color="#B0C9C7"
            style={[{ marginLeft: "auto" }]}
          />
        </View>
        <Line />
        <View style={styles.line}>
          <Feather name="key" size={30} color="black" />
          <Text style={{ fontSize: 20, letterSpacing: 0.5 }}>
            Change Password
          </Text>
          <Feather
            name="arrow-right"
            size={24}
            color="#B0C9C7"
            style={[{ marginLeft: "auto" }]}
          />
        </View>
        <Line />
        <View style={styles.line}>
          <Feather name="log-out" size={30} color="black" />
          <Text style={{ fontSize: 20, letterSpacing: 0.5 }}>Log Out</Text>
          <Feather
            name="arrow-right"
            size={24}
            color="#B0C9C7"
            style={[{ marginLeft: "auto" }]}
          />
        </View>
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
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  userName: {
    alignSelf: "center",
    fontSize: 27,
    fontWeight: "600",
    letterSpacing: 0.3,
    marginLeft: 15,
  },
  infos: {
    width: "auto",
    height: "30%",
    backgroundColor: "#fff",
    borderRadius: 16,
    marginTop: 50,
    paddingHorizontal: 10,
  },
  line: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  text: {
    fontSize: 25,
  },
});
