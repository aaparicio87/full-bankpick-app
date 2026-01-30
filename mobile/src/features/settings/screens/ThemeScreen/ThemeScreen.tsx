import { useCallback } from "react";
import { FlatList } from "react-native";
import Header from "@components/Header/Header";
import LineSeparator from "@components/LineSeparator/LineSeparator";
import ScreenLayout from "@components/ScreenLayout/ScreenLayout";
import { handleBack } from "@utils/routes";
import { useTheme } from "@hooks/useTheme";
import { ThemeOption } from "@features/settings/types/theme";
import { SelectableItem } from "@features/settings/components";

const ThemeScreen = () => {
  const { theme, changeTheme } = useTheme();

  const themes: ThemeOption[] = [
    {
      id: "light",
      name: "Light",
      active: theme === "light",
    },
    {
      id: "dark",
      name: "Dark",
      active: theme === "dark",
    },
  ];

  const renderItem = useCallback(
    ({ item }: { item: ThemeOption }) => (
      <SelectableItem item={item} onPress={() => changeTheme(item.id)} />
    ),
    [],
  );

  return (
    <ScreenLayout>
      <Header
        title="Theme"
        hideLeft
        nameRight="X"
        handlePressRight={handleBack}
      />
      <FlatList
        data={themes}
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

export default ThemeScreen;
