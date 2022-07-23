import { View, Text, Modal } from "react-native";
import React from "react";
import { useRecoilValue } from "recoil";
import { Theme } from "typings/theme";
import { themeAtom } from "atoms/theme-atom";
import { lightStyles, darkStyles } from "./styles";

interface Props{
    isAddResultModalActive: boolean;
    setAddResultModal: Function;
}

const AddResult = (props: Props) => {

  const {isAddResultModalActive, setAddResultModal} = props;  

  const currentTheme = useRecoilValue<Theme>(themeAtom);  

  const onRequestClose = () => {
    if(isAddResultModalActive) setAddResultModal(false);
  }

  return (
    <Modal
     visible={isAddResultModalActive}
     onRequestClose={onRequestClose}
     animationType="slide"
     transparent={true}
    >
        <View style={currentTheme === "dark" ? darkStyles.ModalContainer : lightStyles.ModalContainer}>
            <View style={currentTheme === "dark" ? darkStyles.AddResultContainer : lightStyles.AddResultContainer}>

            </View>
        </View>
    </Modal>
  );
};

export default AddResult;
