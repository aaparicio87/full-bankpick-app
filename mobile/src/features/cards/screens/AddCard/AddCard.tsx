import Header from "@components/Header/Header";
import ScreenLayout from "@components/ScreenLayout/ScreenLayout";
import { handleBack } from "@utils/routes";

const AddCard = () => {
  return (
    <ScreenLayout>
      <Header
        title="Add New Card"
        handlePressLeft={handleBack}
        nameRight="X"
        hideLeft
        handlePressRight={handleBack}
      />
    </ScreenLayout>
  );
};

export default AddCard;
