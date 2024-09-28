import { NavigatorScreenParams } from "@react-navigation/native";

export type RootStackParamList = {
    Login: undefined;
    ForgotPassword: undefined
    TabBar: NavigatorScreenParams<TabParamList> | undefined
}

export type TabParamList = {
    Home: undefined;
    Profile: undefined
}