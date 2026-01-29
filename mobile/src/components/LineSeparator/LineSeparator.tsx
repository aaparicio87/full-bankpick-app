import { View } from "react-native";

type Props = {
  contentClassName?: string;
};

const LineSeparator = ({ contentClassName }: Props) => (
  <View className={`h-px bg-background-secondary ${contentClassName}`} />
);

export default LineSeparator;
