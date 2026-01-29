import { View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import TextInput from "@components/TextInput/TextInput";
import { TEXTS } from "@utils/texts";

import { CardData } from "../../screens/AddCard/AddCard";

type Props = {
  handleUpdateCard: (field: keyof CardData, value: string) => void;
};

const CardForm = ({ handleUpdateCard }: Props) => {
  const { control } = useForm<CardData>({
    defaultValues: {
      cardNumber: "",
      cvv: "",
      expiryDate: "",
      fullName: "",
      paymentNetwork: null,
    },
  });

  return (
    <View className="mt-5">
      <Controller
        control={control}
        name="fullName"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label={TEXTS.cardHolder}
            leftIcon="CircleUser"
            placeholder={TEXTS.sample_name}
            value={value}
            onChangeText={(text) => {
              onChange(text);
              handleUpdateCard("fullName", text);
            }}
            onBlur={onBlur}
          />
        )}
      />

      <View className="flex-row justify-between items-center">
        <View className="w-2/5">
          <Controller
            control={control}
            name="expiryDate"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label={TEXTS.expiry_date}
                placeholder={TEXTS.birth_date_placeholder}
                value={value}
                onChangeText={(text) => {
                  onChange(text);
                  handleUpdateCard("expiryDate", text);
                }}
                onBlur={onBlur}
                maxLength={5}
              />
            )}
          />
        </View>

        <View className="w-1/3">
          <Controller
            control={control}
            name="cvv"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label={TEXTS.fourth_digit}
                placeholder={TEXTS.fourth_digit_placeholder}
                value={value}
                onChangeText={(text) => {
                  onChange(text);
                  handleUpdateCard("cvv", text);
                }}
                onBlur={onBlur}
                maxLength={4}
                keyboardType="numeric"
              />
            )}
          />
        </View>
      </View>

      <Controller
        control={control}
        name="cardNumber"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label={TEXTS.card_number}
            leftIcon="CreditCard"
            placeholder={TEXTS.card_number_placeholder}
            value={value}
            onChangeText={(text) => {
              onChange(text);
              handleUpdateCard("cardNumber", text);
            }}
            onBlur={onBlur}
            maxLength={19}
            keyboardType="numeric"
          />
        )}
      />
    </View>
  );
};

export default CardForm;
