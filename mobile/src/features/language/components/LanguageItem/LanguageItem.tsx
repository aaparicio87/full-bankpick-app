import { Pressable, View } from "react-native";
import IconLucide from "@components/IconLucide/IconLucide";
import LineSeparator from "@components/LineSeparator/LineSeparator";
import { Typography } from "@components/Typography/Typography";
import { Language } from "@features/language/screens/LanguageScreen";

type Props = {
  language: Language;
  handlePress: () => void;
};

const LanguageItem = ({ language, handlePress }: Props) => {
  return (
    <Pressable
      className="flex-row justify-between items-center"
      style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
      onPress={handlePress}
    >
      <Typography>{language.name}</Typography>
      {language.active && (
        <View className="rounded-full w-5 h-5 justify-center items-center bg-primary">
          <IconLucide
            name="Check"
            color={"#ffffff"}
            size={12}
            strokeWidth={3}
          />
        </View>
      )}
    </Pressable>
  );
};

export default LanguageItem;
