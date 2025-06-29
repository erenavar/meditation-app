import { MaterialCommunityIcons } from "@expo/vector-icons";

export interface IProps {
  title: string;
  description: string;
  id: string;
  image: any;
}

export interface ISignup {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ICreateUser {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IPentagonItem {
  iconName: keyof typeof MaterialCommunityIcons.glyphMap;
  opacity?: number;
}

export interface IInstance {
  id?: number;
  city: string;
  title: string;
  description: string;
  publishedAt: string;
  images: string[];
}
