import TabScreenNavigation from "@components/TabScreenLayout/TabScreenLayout";
import { mockTransactions } from "@utils/mocks";
import BankCard from "@components/BankCard/BankCard";
import TransactionsList from "@components/TransactionsList/TransactionsList";
import HeaderTransaction from "@components/HeaderTransactions/HeaderTransaction";

import { Actions } from "../../components/Actions/Actions";
import { useHome } from "../../hooks/useHome";
import TabHeader from "@components/TabHeader/TabHeader";

const HomeScreen = () => {
  const { transactionActions } = useHome();

  return (
    <TabScreenNavigation className="mb-10">
      <TabHeader profile onPressAction={() => {}} iconName="Search" />
      <BankCard />
      <Actions listOperations={transactionActions} />
      <TransactionsList
        containerClassName="flex-1 gap-5"
        transactions={mockTransactions}
      >
        <HeaderTransaction action={() => {}} />
      </TransactionsList>
    </TabScreenNavigation>
  );
};

export default HomeScreen;
