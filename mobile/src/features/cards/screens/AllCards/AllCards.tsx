import { useCallback } from "react";
import { FlatList } from "react-native";
import { Card } from "../../types/cards";
import BankCard from "@components/BankCard/BankCard";
import { CARDS_LIST } from "@utils/mocks";
import Header from "@components/Header/Header";
import { handleBack } from "@utils/routes";
import ScreenLayout from "@components/ScreenLayout/ScreenLayout";
import { useRouter } from "expo-router";

const AllCards = () => {
  const router = useRouter();

  const renderItem = useCallback(({ item }: { item: Card }) => {
    const { cardNumber, expiryDate, cvv, paymentNetwork, fullName } = item;

    return (
      <BankCard
        cardNumber={cardNumber}
        cvv={cvv}
        expiryDate={expiryDate}
        fullName={fullName}
        paymentNetwork={paymentNetwork}
      />
    );
  }, []);

  return (
    <ScreenLayout>
      <Header
        nameRight="Plus"
        handlePressRight={() => router.navigate("/(app)/card/add-card")}
        title="All Cards"
        handlePressLeft={handleBack}
      />
      <FlatList
        data={CARDS_LIST}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerClassName="gap-6 mt-8"
      />
    </ScreenLayout>
  );
};

export default AllCards;
