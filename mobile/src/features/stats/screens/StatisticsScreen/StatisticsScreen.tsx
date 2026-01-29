import TabScreenNavigation from "@components/TabScreenLayout/TabScreenLayout";
import TransactionsList from "@components/TransactionsList/TransactionsList";
import HeaderTransaction from "@components/HeaderTransactions/HeaderTransaction";
import { mockTransactions } from "@utils/mocks";

import { Chart } from "../../components";
import TabHeader from "@components/TabHeader/TabHeader";
import { View } from "react-native";

const DATA = [
  { month: "Jan", balance: 5420.5 },
  { month: "Feb", balance: 6150.75 },
  { month: "Mar", balance: 5890.25 },
  { month: "Apr", balance: 7200.0 },
  { month: "May", balance: 8545.0 },
  { month: "Jun", balance: 8320.5 },
  { month: "Jul", balance: 9100.75 },
  { month: "Aug", balance: 8750.25 },
  { month: "Sep", balance: 9500.0 },
  { month: "Oct", balance: 10200.5 },
  { month: "Nov", balance: 9850.75 },
  { month: "Dec", balance: 11000.0 },
];

const StatisticsScreen = () => {
  return (
    <TabScreenNavigation className="mb-10">
      <TabHeader onPressAction={() => {}} iconName="Bell" />
      <Chart data={DATA} />
      <TransactionsList
        containerClassName="gap-4"
        transactions={mockTransactions}
      >
        <HeaderTransaction action={() => {}} />
      </TransactionsList>
    </TabScreenNavigation>
  );
};

export default StatisticsScreen;
