import { StyleSheet } from "react-native";
import { Theme } from "typings/theme";
import { colors } from "constants/colors";

const styles = (theme: Theme) => {
    return StyleSheet.create({
        DropdownInputContainer: {
            width: "100%",
            marginTop: 10,
            paddingHorizontal: 15
        },
        TitleText: {
            color: theme === "dark" ? colors.primaryLight : colors.primaryDark,
            fontSize: 16,
            fontFamily: "Manrope_400Regular"
        },
        DropdownPlaceholder: {
            color: colors.lightGrey,
            fontFamily: "Manrope_400Regular",
            fontSize: 18
        },
        Dropdown: {
            paddingHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 2,
            borderColor: theme === "dark" ? colors.primaryLight : colors.primaryDark,
            backgroundColor: theme === "dark" ? colors.secondaryDark : colors.secondaryLight,
            marginTop: 5,
            fontFamily: "Manrope_400Regular",
            fontSize: 18,
            paddingVertical: 10,
            borderRadius: 10,
            color: theme === "dark" ? colors.primaryLight : colors.primaryDark,
        },
        DropdownContainer: {
            paddingHorizontal: 10,
            justifyContent: "center",
            fontFamily: "Manrope_400Regular",
            fontSize: 18,
            paddingVertical: 10,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: theme === "dark" ? colors.primaryLight : colors.primaryDark,
            backgroundColor: theme === "dark" ? colors.secondaryDark : colors.secondaryLight
        },
        DropdownListLabel: {
            color: theme === "dark" ? colors.primaryLight : colors.primaryDark,
            fontFamily: "Manrope_400Regular",
            fontSize: 18,
        },
        DropdownLabel: {
            color: theme === "dark" ? colors.primaryLight : colors.primaryDark,
            fontFamily: "Manrope_400Regular",
            fontSize: 18,
        },
        DropdownListSelectedLabel: {
            color: colors.primaryGreen
        }
    });
};

export const lightStyles = styles("light");
export const darkStyles = styles("dark");
