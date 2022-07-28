import { View, Text, Modal, ScrollView } from "react-native";
import React, {useState} from "react";
import { useRecoilValue } from "recoil";
import { Theme } from "typings/theme";
import { themeAtom } from "atoms/theme-atom";
import Toast from "react-native-toast-message";
import { toastConfig } from "config";
import { ModalHeader, ModalActionButton, ModalTextInput, ModalNumericalInput } from "components/modal-components";
import { lightStyles, darkStyles } from "./styles";

interface Props{
    isAddResultModalActive: boolean;
    setAddResultModal: Function;
}

const AddResult = (props: Props) => {

  const {isAddResultModalActive, setAddResultModal} = props;  

  const currentTheme = useRecoilValue<Theme>(themeAtom);
  const [quizName, setQuizName] = useState<string>("");
  
  const [obtainedMarks, setObtainedMarks] = useState<string>("");
  const [maximumMarks, setMaximumMarks] = useState<string>("");

  const [myRank, setMyRank] = useState<string>("");
  const [totalParticipants, setTotalParticipants] = useState<string>("");

  const onRequestClose = () => {
    if(isAddResultModalActive) setAddResultModal(false);
  }

  const onAddResultButtonPressed = () => {
    console.log("Some Action will be performed to snatch your property!!");
  };

  return (
    <Modal
     visible={isAddResultModalActive}
     onRequestClose={onRequestClose}
     animationType="slide"
     transparent={true}
    >
        <View style={currentTheme === "dark" ? darkStyles.ModalContainer : lightStyles.ModalContainer}>

            <View style={currentTheme === "dark" ? darkStyles.AddResultContainer : lightStyles.AddResultContainer}>
              <ModalHeader canCloseModal={true} disablingButtonReason="" isModalOpen={isAddResultModalActive} setIModalVisibility={setAddResultModal} title="Add Result" />
              <ScrollView>
                <ModalTextInput
                  title="Quiz Name"
                  value={quizName}
                  onChangeText={(e) => setQuizName(e)}
                  placeholder="C++ Placement Quiz"
                />

                <View style={currentTheme === "dark" ? darkStyles.NumericInputContainer : lightStyles.NumericInputContainer}>
                  <ModalNumericalInput
                    title="Obtained Marks"
                    value={obtainedMarks}
                    onChangeText={(text) => setObtainedMarks(text)}
                    placeholder="0" 
                  />
                  <ModalNumericalInput
                    title="Maximum Marks"
                    value={maximumMarks}
                    onChangeText={(text) => setMaximumMarks(text)}
                    placeholder="0" 
                  />
                </View>

                <View style={currentTheme === "dark" ? darkStyles.NumericInputContainer : lightStyles.NumericInputContainer}>
                  <ModalNumericalInput
                    title="Your Rank"
                    value={myRank}
                    onChangeText={(text) => setMyRank(text)}
                    placeholder="1" 
                  />
                  <ModalNumericalInput
                    title="Total Participants"
                    value={totalParticipants}
                    onChangeText={(text) => setTotalParticipants(text)}
                    placeholder="100" 
                  />
                </View>
              </ScrollView>
              <View style={currentTheme === "dark" ? darkStyles.ActionButtonContainer : lightStyles.ActionButtonContainer}>
                <ModalActionButton title="Add Result" onPress={onAddResultButtonPressed} />
              </View>
            </View>

        </View>
        <Toast config={toastConfig} />
    </Modal>
  );
};

export default AddResult;
