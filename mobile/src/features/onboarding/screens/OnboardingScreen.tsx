import { useCallback } from "react";
import { useWindowDimensions, View, ViewToken } from "react-native";
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import OnboardItem from "../components/OnboardItem/OnboardItem";
import PaginationElement from "../components/PaginationElement/PaginationElement";
import OnboardButton from "../components/OnboardButton/OnboardButton";
import { Page, pages } from "../data/pages";
import { TEXTS } from "@utils/texts";
import { useAuthContext } from "@contexts/auth/AuthContext";
import { useCSSVariable } from "uniwind";

const OnboardingScreen = () => {
  const background = useCSSVariable("--color-background");
  const { handleTogleCompleteOnboarding } = useAuthContext();
  const { width: SCREEN_WIDTH } = useWindowDimensions();
  const x = useSharedValue(0);
  const flatListIndex = useSharedValue(0);
  const flatListRef = useAnimatedRef<Animated.FlatList<Page>>();

  const onViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: Array<ViewToken>;
  }) => {
    flatListIndex.value = viewableItems[0].index ?? 0;
  };

  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      x.value = event.contentOffset.x;
    },
  });

  const renderItem = useCallback(
    ({ item, index }: { item: Page; index: number }) => {
      return (
        <OnboardItem
          item={item}
          index={index}
          x={x}
          screenWidth={SCREEN_WIDTH}
        />
      );
    },
    [x, SCREEN_WIDTH],
  );

  const handlePress = useCallback(() => {
    if (flatListIndex.value === pages.length - 1) {
      handleTogleCompleteOnboarding();
      return;
    } else {
      flatListRef?.current?.scrollToIndex({
        index: flatListIndex.value + 1,
      });
    }
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: background?.toString() }}>
      <Animated.FlatList
        ref={flatListRef}
        data={pages}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderItem}
        onScroll={onScroll}
        scrollEventThrottle={16}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        pagingEnabled
        onViewableItemsChanged={onViewableItemsChanged}
      />
      <View className="flex-row justify-between items-center m-5">
        <PaginationElement
          length={pages.length}
          x={x}
          screenWidth={SCREEN_WIDTH}
        />
        <OnboardButton
          currentIndex={flatListIndex}
          length={pages.length}
          flatListRef={flatListRef}
          onPress={handlePress}
          label={TEXTS.get_started}
        />
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
