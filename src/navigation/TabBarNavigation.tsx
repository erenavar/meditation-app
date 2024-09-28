import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/homeScreen/HomeScreen";
import ProfileScreen from "../screens/profileScreen/ProfileScreen";
import { TabParamList } from "./types";

const Tab = createBottomTabNavigator<TabParamList>();

function TabBarNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default TabBarNavigation;
