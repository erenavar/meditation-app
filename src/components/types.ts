import { MaterialCommunityIcons } from "@expo/vector-icons";
import { GlyphMap } from "@expo/vector-icons/build/createIconSet";

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
