import { NavigatorScreenParams } from "@react-navigation/native";
import { IInstance } from "../components/types";

export type RootStackParamList = {
  Intro: undefined;
  Login: undefined;
  SignUp: undefined;
  TabBar: NavigatorScreenParams<TabParamList> | undefined;
  Article: { props: IInstance };
};

export type TabParamList = {
  Home: undefined;
  Profile: undefined;
  Meditation: undefined;
  Blog: undefined;
  Other: undefined;
};
