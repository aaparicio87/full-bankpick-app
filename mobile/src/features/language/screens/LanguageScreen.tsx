import { useCallback } from "react";
import Header from "@components/Header/Header";
import ScreenLayout from "@components/ScreenLayout/ScreenLayout";
import { handleBack } from "@utils/routes";
import { FlatList } from "react-native";
import { LANGUAGES } from "../config/config";
import LanguageItem from "../components/LanguageItem/LanguageItem";
import LineSeparator from "@components/LineSeparator/LineSeparator";

export interface Language {
  id: string;
  name: string;
  active: boolean;
}

const LanguageScreen = () => {
  const renderItem = useCallback(
    ({ item }: { item: Language }) => (
      <LanguageItem language={item} handlePress={() => {}} />
    ),
    [],
  );

  return (
    <ScreenLayout>
      <Header handlePressLeft={handleBack} title="Language" />

      <FlatList
        data={LANGUAGES}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <LineSeparator contentClassName="my-4" />}
        ListFooterComponent={() => <LineSeparator contentClassName="my-4" />}
        showsVerticalScrollIndicator={false}
        contentContainerClassName="mt-8"
      />
    </ScreenLayout>
  );
};

export default LanguageScreen;
