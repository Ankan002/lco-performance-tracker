import { View, Text, Pressable } from "react-native";
import React from "react";
import { Theme } from "typings/theme";
import { useRecoilValue } from "recoil";
import { themeAtom } from "atoms/theme-atom";
import { Entypo } from "@expo/vector-icons";
import { lightStyles, darkStyles } from "./styles";
import { colors } from "constants/colors";

interface Props{
  isAddResultModalActive: boolean;
  setAddResultModal: Function;
}

const CreateIcon = (props: Props) => {

  const { isAddResultModalActive, setAddResultModal } = props;
  const currentTheme = useRecoilValue<Theme>(themeAtom);

  const onCreateButtonClick = () => {
    setAddResultModal(!isAddResultModalActive);
  };

  return (
    <Pressable style={currentTheme === "dark" ? darkStyles.AddButton : lightStyles.AddButton} onPress={onCreateButtonClick}>
        <Entypo name="plus" size={30} color={currentTheme === "dark" ? colors.primaryLight : colors.primaryDark} />
    </Pressable>
  );
};

export default CreateIcon;
