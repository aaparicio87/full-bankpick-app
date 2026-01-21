import { Image, View } from "react-native";
import { Nfc } from "lucide-react-native";
import { Typography } from "@components/Typography/Typography";

const BankCard = () => {
  return (
    <View className="w-full h-48 bg-card rounded-2xl self-center my-8 relative">
      <Image
        source={{ uri: "worldmap" }}
        className="w-full h-full absolute"
        resizeMode="cover"
        tintColor={"#ffffff"}
      />
      <View className="p-5 gap-y-4 h-full">
        <View className="flex-row justify-between items-center ">
          <Image
            source={{ uri: "circuit_card" }}
            className="w-7 h-7 opacity-75"
            resizeMode="contain"
          />
          <Nfc size={24} color={"#fffff"} stroke={"#707070"} opacity={0.6} />
        </View>
        <View className="gap-y-1">
          <Typography
            className=" text-white tracking-wide"
            weight="normal"
            size="2xl"
          >
            1234 5678 9012 3456
          </Typography>
          <Typography className=" text-white" weight="normal" size="sm">
            AR Jonson
          </Typography>
        </View>
        <View className="flex-row justify-between items-center">
          <View className="flex-row gap-x-8">
            <View className="gap-y-1">
              <Typography className="text-muted-foreground" size="xs">
                Expiry Date
              </Typography>
              <Typography className=" text-white">24/2000</Typography>
            </View>
            <View className="gap-y-1">
              <Typography className=" text-muted-foreground" size="xs">
                CVV
              </Typography>
              <Typography className=" text-white">6986</Typography>
            </View>
          </View>

          <View className="justify-center gap-y-1">
            <Image
              source={{ uri: "master_card" }}
              className="w-8 h-5 self-end "
              resizeMode="contain"
            />
            <Typography className=" text-white">Master Card</Typography>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BankCard;
