import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/homeScreen/HomeScreen";
import ProfileScreen from "../screens/profileScreen/ProfileScreen";
import { TabParamList } from "./types";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Platform } from "react-native";

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
            <MaterialIcons name="home" size={30} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" size={30} color="black" />
          ),
          tabBarLabelStyle: {
            fontSize: 20,
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default TabBarNavigation;
