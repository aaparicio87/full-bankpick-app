import { IconsLucide } from "@/types/icon";
import icons from "@utils/icons";
import { useCSSVariable } from "uniwind";
import { LucideProps } from "lucide-react-native";

interface IconProps extends Omit<LucideProps, "ref"> {
  name: IconsLucide;
}

const IconLucide = ({ name, color, size, ...rest }: IconProps) => {
  const LucideIcon = icons[name];
  const iconColor = useCSSVariable("--color-foreground");
  const defaultColor = color || iconColor;

  return <LucideIcon color={defaultColor?.toString()} size={size} {...rest} />;
};

export default IconLucide;
