import { StackActionType } from '@react-navigation/native';

export interface IGetStartedScreenProps {
  navigation: {
    navigate: (value: string) => void;
    dispatch: (value: StackActionType) => void;
  };
}
