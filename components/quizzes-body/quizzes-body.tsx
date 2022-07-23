import { View, Text } from "react-native";
import React, {useState} from "react";
import { lightStyles, darkStyles } from "./styles";
import { Theme } from "typings/theme";
import { useRecoilValue } from "recoil";
import { themeAtom } from "atoms/theme-atom";
import { CreateIcon } from "components/create-icon";
import { AddResultModal } from "modals";

const QuizzesBody = () => {

  const currentTheme = useRecoilValue<Theme>(themeAtom);
  
  const [isAddResultModalActive, setAddResultModal] = useState<boolean>(false);

  return (
    <View style={currentTheme === "dark" ? darkStyles.BodyContainer : lightStyles.BodyContainer}>
      <CreateIcon isAddResultModalActive={isAddResultModalActive} setAddResultModal={setAddResultModal} />

      <AddResultModal
        isAddResultModalActive={isAddResultModalActive}
        setAddResultModal={setAddResultModal} 
      />
    </View>
  );
};

export default QuizzesBody;
