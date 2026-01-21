import { Pressable } from "react-native";
import { Search } from "lucide-react-native";

export const SearchHome = () => {
  return (
    <Pressable
      className="rounded-full w-12 h-12 justify-center items-center bg-border"
      style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
    >
      <Search size={18} />
    </Pressable>
  );
};
