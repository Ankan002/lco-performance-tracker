import { View, Text, Pressable, GestureResponderEvent } from "react-native";
import React from "react";
import { useRecoilValue } from "recoil";
import { Theme } from "typings/theme";
import { themeAtom } from "atoms/theme-atom";
import { lightStyles, darkStyles } from "./styles";
import { Manrope_500Medium, useFonts } from "@expo-google-fonts/manrope";

interface Props {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
}

const ModalActionButton = (props: Props) => {
  const { title, onPress } = props;

  const currentTheme = useRecoilValue<Theme>(themeAtom);

  const [fontsLoaded] = useFonts({
    Manrope_500Medium,
  });

  return (
    <Pressable
      style={
        currentTheme === "dark"
          ? darkStyles.ActionButton
          : lightStyles.ActionButton
      }
      onPress={onPress}
    >
      {fontsLoaded && (
        <Text
          style={
            currentTheme === "dark"
              ? darkStyles.ActionButtonText
              : lightStyles.ActionButtonText
          }
        >
          {title}
        </Text>
      )}
    </Pressable>
  );
};

export default ModalActionButton;
