import { useCallback } from "react";
import { FlatList } from "react-native";

import Header from "@components/Header/Header";
import ScreenLayout from "@components/ScreenLayout/ScreenLayout";
import { handleBack } from "@utils/routes";
import LineSeparator from "@components/LineSeparator/LineSeparator";

import { LANGUAGES } from "../../config/language";
import { Language } from "../../types/language";
import { SelectableItem } from "../../components/SelectableItem/SelectableItem";

const LanguageScreen = () => {
  const renderItem = useCallback(
    ({ item }: { item: Language }) => (
      <SelectableItem item={item} onPress={() => {}} />
    ),
    [],
  );

  return (
    <ScreenLayout>
      <Header
        title="Language"
        hideLeft
        nameRight="X"
        handlePressRight={handleBack}
      />
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
