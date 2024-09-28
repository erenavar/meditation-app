import { NavigatorScreenParams } from "@react-navigation/native";

export type RootStackParamList = {
    Login: undefined;
    ForgotPassword: undefined
    TabBar: NavigatorScreenParams<TabParamList> 
}

export type TabParamList = {
    Home: undefined;
    Profile: undefined
}