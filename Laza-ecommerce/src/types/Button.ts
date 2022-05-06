import { ImageSourcePropType, ViewStyle } from 'react-native';

export type SocialButtonProps = {
  onPress?: () => void;
  icon?: ImageSourcePropType;
  title: string;
  buttonStyles?: ViewStyle[];
  children?: JSX.Element | JSX.Element[];
  disabled?: boolean;
};

export type BottomButtonProps = {
  onPress?: () => void;
  title: string;
  buttonStyles?: ViewStyle[];
  children?: JSX.Element | JSX.Element[];
  disabled?: boolean;
};

export type GoBackButtonProps = {
  onPress?: () => void;
  icon: ImageSourcePropType;
  buttonStyles?: ViewStyle[];
  disabled?: boolean;
};
