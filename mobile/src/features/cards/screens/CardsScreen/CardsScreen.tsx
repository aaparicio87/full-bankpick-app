import BankCard from "@components/BankCard/BankCard";
import TabScreenNavigation from "@components/TabScreenLayout/TabScreenLayout";
import TransactionsList from "@components/TransactionsList/TransactionsList";
import TabHeader from "@components/TabHeader/TabHeader";
import { mockTransactions } from "@utils/mocks";

import { SpendLimits } from "../../components/SpendLimits/SpendLimits";

const CardsScreen = () => {
  return (
    <TabScreenNavigation className="mb-10">
      <TabHeader onPressAction={() => {}} iconName="Plus" />
      <BankCard
        containerClassName="my-8"
        cardNumber="1234 5678 9012 3456"
        fullName="AR Jonson"
        expiryDate="24/2000"
        cvv="6986"
        paymentNetwork="Matercard"
      />
      <TransactionsList
        containerClassName="flex-1 gap-5"
        transactions={mockTransactions}
      />
      <SpendLimits />
    </TabScreenNavigation>
  );
};

export default CardsScreen;
