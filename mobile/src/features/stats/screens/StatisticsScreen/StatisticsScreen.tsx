import TabScreenNavigation from "@components/TabScreenLayout/TabScreenLayout";
import TransactionsList from "@components/TransactionsList/TransactionsList";
import HeaderTransaction from "@components/HeaderTransactions/HeaderTransaction";
import { mockTransactions } from "@utils/mocks";

import { Balance } from "../../components/Balance/Balance";
import TabHeader from "@components/TabHeader/TabHeader";

const StatisticsScreen = () => {
  return (
    <TabScreenNavigation className="mb-10">
      <TabHeader onPressAction={() => {}} iconName="Bell" />

      <Balance balance={"$8,545.00"} />

      <TransactionsList
        containerClassName="flex-1 gap-5 mt-10"
        transactions={mockTransactions}
      >
        <HeaderTransaction action={() => {}} />
      </TransactionsList>
    </TabScreenNavigation>
  );
};

export default StatisticsScreen;
