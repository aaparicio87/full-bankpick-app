import { Image, View } from "react-native";
import { Nfc } from "lucide-react-native";
import { Typography } from "@components/Typography/Typography";
import { PaymentNetwork } from "@/types/payment";
import { TEXTS } from "@utils/texts";
import { CARD_BRAND_ICONS } from "@utils/constants";

type Props = {
  cardNumber: string;
  fullName: string;
  expiryDate: string;
  cvv: string;
  paymentNetwork: PaymentNetwork;
  containerClassName?: string;
};

const BankCard = ({
  cardNumber,
  fullName,
  expiryDate,
  cvv,
  paymentNetwork,
  containerClassName,
}: Props) => {
  return (
    <View
      className={`w-full h-48 bg-card rounded-2xl self-center relative ${containerClassName}`}
    >
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
            {cardNumber}
          </Typography>
          <Typography className=" text-white" weight="normal" size="sm">
            {fullName}
          </Typography>
        </View>
        <View className={`flex-row justify-between items-center`}>
          <View className="flex-row gap-x-8">
            <View className="gap-y-1">
              <Typography className="text-muted-foreground" size="xs">
                {TEXTS.expiry_date}
              </Typography>
              <Typography className=" text-white">{expiryDate}</Typography>
            </View>
            <View className="gap-y-1">
              <Typography className=" text-muted-foreground" size="xs">
                {TEXTS.cvv}
              </Typography>
              <Typography className=" text-white">{cvv}</Typography>
            </View>
          </View>

          <View className={`justify-center gap-y-1 self-end`}>
            <Image
              source={{ uri: CARD_BRAND_ICONS[paymentNetwork] }}
              className="w-8 h-5 self-end"
              resizeMode="contain"
            />
            {paymentNetwork === "Matercard" && (
              <Typography className=" text-white">{paymentNetwork}</Typography>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default BankCard;
