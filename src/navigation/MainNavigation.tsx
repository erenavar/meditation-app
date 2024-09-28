import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/loginScreen/LoginScreen";
import ForgotPasswordScreen from "../screens/forgotPasswordScreen/ForgotPasswordScreen";
import { RootStackParamList } from "./types";
import TabBarNavigation from "./TabBarNavigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      </Stack.Navigator>
      <Stack.Screen name="TabBarNavigation" component={TabBarNavigation} />
    </NavigationContainer>
  );
}

export default MainNavigation;
