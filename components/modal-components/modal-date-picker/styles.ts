import { StyleSheet } from "react-native";
import { Theme } from "typings/theme";
import { colors } from "constants/colors";

const styles = (theme: Theme) => {
  return StyleSheet.create({
    DatePickerContainer: {
      width: "100%",
      paddingHorizontal: 15,
      marginTop: 15
    },
    CheckboxContainer: {
      marginTop: 10
    },
    CheckboxIconStyle: {
      borderWidth: 2, 
      borderRadius: 10, 
      borderColor: theme === "dark" ? colors.primaryLight : colors.primaryDark
    },
    CheckboxInnerIconStyle: {
      borderWidth: 0,
    },
    CheckboxTextStyle: { 
      textDecorationLine: "none", 
      color: theme === "dark" ? colors.primaryLight : colors.primaryDark,
      fontFamily: "Manrope_400Regular"
    },
    Title: {
      color: theme === "dark" ? colors.primaryLight : colors.primaryDark,
      fontSize: 16,
      fontFamily: "Manrope_400Regular"
    },
    Date: {
      paddingHorizontal: 10,
      flexDirection: "row",
      alignItems: "center",
      borderWidth: 2,
      borderColor: theme === "dark" ? colors.primaryLight : colors.primaryDark,
      backgroundColor: theme === "dark" ? colors.secondaryDark : colors.secondaryLight,
      color: theme === "dark" ? colors.primaryLight : colors.primaryDark,
      marginTop: 5,
      fontFamily: "Manrope_400Regular",
      fontSize: 18,
      paddingVertical: 10,
      borderRadius: 10
    },
    CheckboxTextContainer: {
      marginLeft: 10
    },
    DatePicker: { 
      borderRadius: 10,
      borderWidth: 2,
      borderColor: theme === "dark" ? colors.primaryLight : colors.primaryDark,
      marginTop: 5,
      fontFamily: "Manrope_400Regular"
    }
  });
};

export const lightStyles = styles("light");
export const darkStyles = styles("dark");
