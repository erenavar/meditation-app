import { NavigatorScreenParams } from "@react-navigation/native";

export type RootStackParamList = {
  Intro: undefined;
  Login: undefined;
  SignUp: undefined;
  TabBar: NavigatorScreenParams<TabParamList> | undefined;
  Article: undefined;
};

export type TabParamList = {
  Home: undefined;
  Profile: undefined;
  Meditation: undefined;
  Blog: undefined;
  Other: undefined;
};
