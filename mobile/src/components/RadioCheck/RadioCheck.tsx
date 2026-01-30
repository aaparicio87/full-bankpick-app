import { View } from "react-native";
import IconLucide, { IconProps } from "../IconLucide/IconLucide";

type Props = {
  contentClass?: string;
  iconProps?: IconProps;
};

const RadioCheck = ({ contentClass, iconProps }: Props) => {
  return (
    <View
      className={`rounded-full w-5 h-5 justify-center items-center bg-primary ${contentClass}`}
    >
      <IconLucide
        name="Check"
        color={"#ffffff"}
        size={12}
        strokeWidth={3}
        {...iconProps}
      />
    </View>
  );
};

export default RadioCheck;
