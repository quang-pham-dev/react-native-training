export interface IBrandDetailProps {
  navigation: {
    navigate: (value: string, params: string) => void;
    goBack: () => void;
  };
  route: {
    params: string;
  };
}
