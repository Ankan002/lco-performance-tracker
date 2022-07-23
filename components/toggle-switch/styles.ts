import { StyleSheet } from "react-native";
import { Theme } from "typings/theme";
import { colors } from "constants/colors";

const styles = (theme: Theme) => {
    return StyleSheet.create({
        ToggleSwitchContainer: {
            width: "100%",
            paddingHorizontal: 15,
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 10,
            justifyContent: "space-between"
        },
        Title: {
            fontSize: 17,
            color: theme === "dark" ? colors.secondaryLight : colors.secondaryDark,
            fontFamily: "Manrope_400Regular"
        },
        SwicthButton: {
            borderWidth: 2,
            borderColor: colors.primaryDark
        },
        Switch: {
            borderWidth: 2,
            color: theme === "dark" ? colors.secondaryLight : colors.secondaryDark
        }
    });
};

export const darkStyles = styles("dark");
export const lightStyles = styles("light");