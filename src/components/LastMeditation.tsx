import { StyleSheet, Text, View } from "react-native";
import { PentagonIcon } from "./PentagonIcon";

const LastMeditation = () => {
  return (
    <View style={styles.lastMeditationArea}>
      <View style={styles.iconWrapper}>
        <PentagonIcon />
        <View style={styles.info}>
          <Text style={styles.name}>Gunluk Meditasyon</Text>
          <Text style={styles.meditationDate}>16 Sub 2025</Text>
        </View>
      </View>
      <View style={styles.info2}>
        <Text style={styles.genre}>SLEEP</Text>
        <Text style={styles.duration}>5 Minutes</Text>
      </View>
    </View>
  );
};

export default LastMeditation;

const styles = StyleSheet.create({
  lastMeditationArea: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    borderRadius: 13,
    backgroundColor: "#fff",
  },
  iconWrapper: {
    marginRight: 10,
    flexDirection: "row",
  },
  info: {
    justifyContent: "center",
    marginLeft: 10,
    lineHeight: 100,
  },
  name: {
    lineHeight: 25,
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: 0.5,
  },
  meditationDate: {
    color: "#76908E",
    fontSize: 14,
    letterSpacing: 0.5,
  },

  info2: {
    justifyContent: "flex-start",
    gap: 4,
  },
  genre: {
    fontSize: 10,
    fontWeight: 900,
    backgroundColor: "#0092C9",
    color: "#fff",
    borderRadius: 4,
    alignSelf: "center",
    paddingHorizontal: 20,
    paddingVertical: 3,
    marginBottom: 4,
  },
  duration: {
    color: "#76908E",
    fontSize: 14,
    letterSpacing: 0.5,
  },
});
