import { View, Image } from "react-native";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  contentClassName?: string;
  imageClassName?: string;
};

const ProfileInfo = ({ children, contentClassName, imageClassName }: Props) => {
  return (
    <View className={contentClassName}>
      <Image
        className={`rounded-full w-12 h-12 bg-border ${imageClassName}`}
        source={{ uri: "https://picsum.photos/seed/696/3000/2000" }}
      />
      {children}
    </View>
  );
};

export default ProfileInfo;
