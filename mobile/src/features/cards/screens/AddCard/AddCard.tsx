import { PaymentNetwork } from "@/types/payment";
import BankCard from "@components/BankCard/BankCard";
import Header from "@components/Header/Header";
import ScreenLayout from "@components/ScreenLayout/ScreenLayout";
import CardForm from "../../components/CardForm/CardForm";
import { handleBack } from "@utils/routes";
import { useCallback, useState } from "react";

export interface CardData {
  cardNumber: string;
  cvv: string;
  expiryDate: string;
  fullName: string;
  paymentNetwork: PaymentNetwork | null;
}

const AddCard = () => {
  const [cardData, setCardData] = useState<CardData>({
    cardNumber: "",
    cvv: "",
    expiryDate: "",
    fullName: "",
    paymentNetwork: null,
  });

  const handleUpdateCard = useCallback(
    (field: keyof CardData, value: string) => {
      setCardData((prev) => ({
        ...prev,
        [field]: value,
      }));
    },
    [],
  );

  return (
    <ScreenLayout>
      <Header
        title="Add New Card"
        handlePressLeft={handleBack}
        nameRight="X"
        hideLeft
        handlePressRight={handleBack}
      />
      <BankCard
        cardNumber={cardData.cardNumber}
        cvv={cardData.cvv}
        expiryDate={cardData.expiryDate}
        fullName={cardData.fullName}
        paymentNetwork={cardData.paymentNetwork}
        containerClassName="mt-5"
      />

      <CardForm handleUpdateCard={handleUpdateCard} />
    </ScreenLayout>
  );
};

export default AddCard;
