import { View } from "react-native";

import BankCard from "@components/BankCard/BankCard";
import IconLucide from "@components/IconLucide/IconLucide";
import TabRightAction from "@components/TabRightAction/TabRightAction";
import TabScreenNavigation from "@components/TabScreenLayout/TabScreenLayout";
import TransactionsList from "@components/TransactionsList/TransactionsList";
import { mockTransactions } from "@utils/mocks";

import { SpendLimits } from "../../components/SpendLimits/SpendLimits";

const CardsScreen = () => {
  return (
    <TabScreenNavigation className="mb-10">
      <View className="flex-row justify-end items-center ">
        <TabRightAction>
          <IconLucide name="Plus" size={18} />
        </TabRightAction>
      </View>
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
