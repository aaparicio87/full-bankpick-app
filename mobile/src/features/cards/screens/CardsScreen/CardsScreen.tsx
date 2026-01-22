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
      <BankCard />
      <TransactionsList
        containerClassName="flex-1 gap-5"
        transactions={mockTransactions}
      />
      <SpendLimits />
    </TabScreenNavigation>
  );
};

export default CardsScreen;
