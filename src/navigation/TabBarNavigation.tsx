import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/homeScreen/HomeScreen";
import ProfileScreen from "../screens/profileScreen/ProfileScreen";
import { TabParamList } from "./types";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Platform } from "react-native";
import OtherScreen from "../screens/otherScreen/OtherScreen";
import BlogScreen from "../screens/blogScreen/BlogScreen";
import MeditationScreen from "../screens/meditationScreen/MeditationScreen";

const Tab = createBottomTabNavigator<TabParamList>();

function TabBarNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          marginBottom: Platform.OS === "android" ? 15 : undefined,
        },
        tabBarStyle: {
          height: Platform.OS === "android" ? 65 : 80,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={30} color="pink" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" size={30} color="green" />
          ),
        }}
      />
      <Tab.Screen
        name="Meditation"
        component={MeditationScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="meditation"
              size={34}
              color="#73c3dd"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Blog"
        component={BlogScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="article" size={24} color="red" />
          ),
        }}
      />
      <Tab.Screen
        name="Other"
        component={OtherScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="all-inclusive" size={24} color="purple" />
          ),
          tabBarIconStyle: {
            color: "red",
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default TabBarNavigation;
