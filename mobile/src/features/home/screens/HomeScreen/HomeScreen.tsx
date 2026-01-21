import { View } from "react-native";
import TabScreenNavigation from "@components/TabScreenLayout/TabScreenLayout";
import BankCard from "@components/BankCard/BankCard";
import {
  ProfileInfo,
  SearchHome,
  Actions,
  Transactions,
} from "../../components";
import { useHome } from "@features/home/hooks/useHome";
import { mockTransactions } from "@utils/mocks";

const HomeScreen = () => {
  const { transactionActions } = useHome();

  return (
    <TabScreenNavigation className="mb-10 bg-amber-300">
      <View className="flex-row justify-between items-center ">
        <ProfileInfo />
        <SearchHome />
      </View>
      <BankCard />
      <Actions listOperations={transactionActions} />
      <Transactions transactions={mockTransactions} />
    </TabScreenNavigation>
  );
};

export default HomeScreen;
