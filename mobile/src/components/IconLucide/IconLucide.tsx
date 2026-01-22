import * as icons from "lucide-react-native/icons";
import { useCSSVariable } from "uniwind";

interface IconProps {
  name: keyof typeof icons;
  color?: string;
  size?: number;
}

const IconLucide = ({ name, color, size }: IconProps) => {
  const LucideIcon = icons[name];
  const iconColor = useCSSVariable("--color-foreground");
  const defaultColor = !color ? iconColor : color;

  return <LucideIcon color={defaultColor?.toString()} size={size} />;
};

export default IconLucide;
