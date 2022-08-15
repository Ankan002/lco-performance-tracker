import "react-native-get-random-values";
import { View, Modal, ScrollView } from "react-native";
import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Theme } from "typings/theme";
import { themeAtom } from "atoms/theme-atom";
import Toast from "react-native-toast-message";
import { toastConfig } from "config";
import {
  ModalHeader,
  ModalActionButton,
  ModalTextInput,
  ModalNumericalInput,
  ModalDropdownInput,
  ModalDatePicker,
} from "components/modal-components";
import { dropdownItems } from "constants/dropdown-items";
import moment from "moment";
import { lightStyles, darkStyles } from "./styles";
import { quizResultsAtom } from "atoms/quiz-results-atom";
import { saveQuizResult } from "helpers/save-quiz-result";
import { QuizCategory } from "typings/quiz-category";
import { v4 as uuid } from "uuid";
import { showToast } from "helpers/show-toast";

interface Props {
  isAddResultModalActive: boolean;
  setAddResultModal: Function;
}

const AddResult = (props: Props) => {
  const { isAddResultModalActive, setAddResultModal } = props;

  const currentTheme = useRecoilValue<Theme>(themeAtom);
  const setQuizResults = useSetRecoilState(quizResultsAtom);
  const [quizName, setQuizName] = useState<string>("");

  const [obtainedMarks, setObtainedMarks] = useState<string>("");
  const [maximumMarks, setMaximumMarks] = useState<string>("");

  const [myRank, setMyRank] = useState<string>("");
  const [totalParticipants, setTotalParticipants] = useState<string>("");

  const [quizCategory, setQuizCategory] = useState<QuizCategory>("");
  const [quizCategoryDropdownOpen, setQuizCategoryDropdownOpen] =
    useState<boolean>(false);

  const [quizDate, setQuizDate] = useState<string>(
    moment().format("YYYY-MM-DD")
  );

  const [useCustomDate, setUseCustomDate] = useState<boolean>(false);

  const onRequestClose = () => {
    if (isAddResultModalActive) setAddResultModal(false);
  };

  const onAddResultButtonPressed = () => {
    if (!parseInt(obtainedMarks)) {
      showToast({
        type: "error",
        heading: "Marks Error!!",
        body: "Enter a valid obtained marks",
      });

      return;
    }

    if (!parseInt(maximumMarks)) {
      showToast({
        type: "error",
        heading: "Marks Error!!",
        body: "Enter a valid maximum marks",
      });

      return;
    }

    saveQuizResult(
      {
        id: uuid(),
        quizName,
        quizCategory,
        quizDate,
        obtainedMarks: parseInt(obtainedMarks),
        maximumMarks: parseInt(maximumMarks),
        myRank: parseInt(myRank) ? parseInt(myRank) : undefined,
        totalParticipants: parseInt(totalParticipants)
          ? parseInt(totalParticipants)
          : undefined,
      },
      setQuizResults
    );
  };

  return (
    <Modal
      visible={isAddResultModalActive}
      onRequestClose={onRequestClose}
      animationType="slide"
      transparent={true}
    >
      <View
        style={
          currentTheme === "dark"
            ? darkStyles.ModalContainer
            : lightStyles.ModalContainer
        }
      >
        <View
          style={
            currentTheme === "dark"
              ? darkStyles.AddResultContainer
              : lightStyles.AddResultContainer
          }
        >
          <ModalHeader
            canCloseModal={true}
            disablingButtonReason=""
            isModalOpen={isAddResultModalActive}
            setIModalVisibility={setAddResultModal}
            title="Add Result"
          />

          <ModalDropdownInput
            open={quizCategoryDropdownOpen}
            setOpen={setQuizCategoryDropdownOpen}
            value={quizCategory}
            setValue={setQuizCategory}
            placeholder="Quiz Category"
            items={dropdownItems}
            title="Quiz Category"
          />

          <ScrollView>
            <ModalTextInput
              title="Quiz Name"
              value={quizName}
              onChangeText={(e) => setQuizName(e)}
              placeholder="C++ Placement Quiz"
            />

            <View
              style={
                currentTheme === "dark"
                  ? darkStyles.NumericInputContainer
                  : lightStyles.NumericInputContainer
              }
            >
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

            <View
              style={
                currentTheme === "dark"
                  ? darkStyles.NumericInputContainer
                  : lightStyles.NumericInputContainer
              }
            >
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

            <ModalDatePicker
              useCustomDate={useCustomDate}
              setUseCustomDate={setUseCustomDate}
              checkBoxText="Custom Date"
              title="Quiz Date"
              quizDate={quizDate}
              setQuizDate={setQuizDate}
            />
          </ScrollView>
          <View
            style={
              currentTheme === "dark"
                ? darkStyles.ActionButtonContainer
                : lightStyles.ActionButtonContainer
            }
          >
            <ModalActionButton
              title="Add Result"
              onPress={onAddResultButtonPressed}
            />
          </View>
        </View>
      </View>
      <Toast config={toastConfig} />
    </Modal>
  );
};

export default AddResult;
