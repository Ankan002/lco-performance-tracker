import { View, Text, TextInput } from "react-native";
import React from "react";
import { useRecoilValue } from "recoil";
import { themeAtom } from "atoms/theme-atom";
import { Theme } from "typings/theme";
import { Manrope_400Regular, useFonts } from "@expo-google-fonts/manrope";
import { lightStyles, darkStyles } from "./styles";
import { colors } from "constants/colors";

interface Props{
    title: string;
    value: string;
    onChangeText: (text: string) => void;
    placeholder: string;
}

const ModalNumerialInput = (props: Props) => {

  const { title, value, onChangeText, placeholder } = props; 
  const currentTheme = useRecoilValue<Theme>(themeAtom);
  
  const [fontsLoaded] = useFonts({
    Manrope_400Regular
  });

  return (
    <View style={currentTheme === "dark" ? darkStyles.NumerialInputContainer : lightStyles.NumerialInputContainer}>
      {
        fontsLoaded && (
            <Text style={currentTheme === "dark" ? darkStyles.TitleText : lightStyles.TitleText}>
                {title}
            </Text> 
        )
      }
      {
        fontsLoaded && (
            <TextInput
              value={value}
              onChangeText={onChangeText}
              placeholder={placeholder}
              style={currentTheme === "dark" ? darkStyles.TextInput : lightStyles.TextInput}
              placeholderTextColor={colors.lightGrey}
              keyboardType="number-pad"
            />
        )
      }
    </View>
  );
};

export default ModalNumerialInput;
