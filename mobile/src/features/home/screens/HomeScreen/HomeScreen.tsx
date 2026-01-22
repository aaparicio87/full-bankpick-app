import { View } from "react-native";
import TabScreenNavigation from "@components/TabScreenLayout/TabScreenLayout";
import BankCard from "@components/BankCard/BankCard";
import { ProfileInfo, Actions } from "../../components";
import { useHome } from "@features/home/hooks/useHome";
import { mockTransactions } from "@utils/mocks";
import TabRightAction from "@components/TabRightAction/TabRightAction";
import IconLucide from "@components/IconLucide/IconLucide";
import TransactionsList from "@components/TransactionsList/TransactionsList";
import HeaderTransaction from "@components/HeaderTransactions/HeaderTransaction";
import { useCSSVariable } from "uniwind";

const HomeScreen = () => {
  const { transactionActions } = useHome();

  return (
    <TabScreenNavigation className="mb-10">
      <View className="flex-row justify-between ms-center ">
        <ProfileInfo welcomeText="Welcome to the app!" fullName="Jhon Doe" />
        <TabRightAction>
          <IconLucide name="Search" size={18} />
        </TabRightAction>
      </View>
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
