import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

interface MeditationFilterProps {
  onTabChange: (category: string) => void;
  activeColor?: string;
}

const MeditationFilter: React.FC<MeditationFilterProps> = ({
  onTabChange,
  activeColor = "#73c3dd", // Using your meditation tab color
}) => {
  const [activeTab, setActiveTab] = useState("ALL");
  const tabs = ["ALL", "SLEEP", "ANXIETY", "STRESS", "FOCUS"];

  const handleTabPress = (tab: string) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => handleTabPress(tab)}
            style={[
              styles.tab,
              activeTab === tab && [
                styles.activeTab,
                { backgroundColor: activeColor },
              ],
            ]}
            activeOpacity={0.7}>
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default MeditationFilter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E5F4F2", // Matching your app's background
    paddingVertical: 15,
  },
  scrollContent: {
    paddingHorizontal: 15,
    gap: 10,
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  activeTab: {
    borderWidth: 0,
  },
  tabText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#76908E", // Matching your app's gray text
    letterSpacing: 0.5,
  },
  activeTabText: {
    color: "#FFFFFF",
    fontWeight: "700",
  },
});
