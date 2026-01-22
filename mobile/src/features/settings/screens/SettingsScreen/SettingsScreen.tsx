import { useCallback } from "react";
import { SectionList, View } from "react-native";
import TabHeader from "@components/TabHeader/TabHeader";
import TabScreenNavigation from "@components/TabScreenLayout/TabScreenLayout";
import { Typography } from "@components/Typography/Typography";

import { SETTINGS_DATA } from "../../config/config";
import { SettingItem, SettingSection } from "../../types/setting";
import {
  ItemSection,
  ItemSectionSwitch,
  ItemSeparator,
  SectionFooter,
} from "../../components";

const SettingsScreen = () => {
  const renderSectionHeader = useCallback(
    ({ section }: { section: SettingSection }) => (
      <View className="my-5">
        <Typography
          weight="normal"
          size="base"
          className="text-foreground-secondary"
        >
          {section.title}
        </Typography>
      </View>
    ),
    [],
  );

  const renderItem = useCallback(({ item }: { item: SettingItem }) => {
    if (item.type === "navigation") {
      return <ItemSection item={item} />;
    }
    if (item.type === "switch") {
      return <ItemSectionSwitch item={item} />;
    }
    return null; // Always return null or a fallback for safety
  }, []);

  return (
    <TabScreenNavigation className="mb-10">
      <TabHeader iconName="LogOut" onPressAction={() => {}} />
      <SectionList
        sections={SETTINGS_DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ItemSeparatorComponent={ItemSeparator}
        contentContainerStyle={{ paddingBottom: 40 }}
        stickySectionHeadersEnabled={false}
        renderSectionFooter={({ section }) => {
          const isLastSection =
            section.title === SETTINGS_DATA[SETTINGS_DATA.length - 1].title;
          return !isLastSection ? <SectionFooter /> : null;
        }}
      />
    </TabScreenNavigation>
  );
};

export default SettingsScreen;
