import IconLucide from "@components/IconLucide/IconLucide";
import TabRightAction from "@components/TabRightAction/TabRightAction";

type Props = {
  handlePress: () => void;
};

const BackButton = ({ handlePress }: Props) => {
  return (
    <TabRightAction onPress={handlePress}>
      <IconLucide name="ChevronLeft" size={18} />
    </TabRightAction>
  );
};

export default BackButton;
