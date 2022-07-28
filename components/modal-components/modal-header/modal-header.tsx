import { View, Text, Pressable } from "react-native";
import React from "react";
import { Theme } from "typings/theme";
import { useRecoilValue } from "recoil";
import { themeAtom } from "atoms";
import { useFonts, Manrope_500Medium } from "@expo-google-fonts/manrope";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "constants/colors";
import { lightStyles, darkStyles } from "./styles";
import { showToast } from "helpers";

interface Props {
  title: string;
  isModalOpen: boolean;
  setIModalVisibility: Function;
  canCloseModal: boolean;
  disablingButtonReason: string;
}

const ModalHeader = (props: Props) => {
  const {
    title,
    isModalOpen,
    setIModalVisibility,
    canCloseModal,
    disablingButtonReason,
  } = props;

  const currentTheme = useRecoilValue<Theme>(themeAtom);
  const [fonstLoaded] = useFonts({
    Manrope_500Medium,
  });

  const onClosePressed = () => {
    if (!canCloseModal) {
      showToast({
        type: "error",
        heading: "Hold on...",
        body: disablingButtonReason,
      });

      return;
    }

    if (isModalOpen) setIModalVisibility(false);
  };

  return (
    <View
      style={
        currentTheme === "dark"
          ? darkStyles.HeaderContainer
          : lightStyles.HeaderContainer
      }
    >
      <Pressable
        style={
          currentTheme === "dark"
            ? darkStyles.NavigationButton
            : lightStyles.NavigationButton
        }
        onPress={onClosePressed}
      >
        <Ionicons
          name="arrow-back-outline"
          size={24}
          color={
            currentTheme === "dark" ? colors.primaryLight : colors.primaryDark
          }
        />
      </Pressable>

      {fonstLoaded && (
        <Text
          style={
            currentTheme === "dark"
              ? darkStyles.TitleText
              : lightStyles.TitleText
          }
        >
          {title}
        </Text>
      )}
    </View>
  );
};

export default ModalHeader;
