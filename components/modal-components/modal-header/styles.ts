import { StyleSheet } from "react-native";
import { Theme } from "typings/theme";
import { colors } from "constants/colors";

const styles = (theme: Theme) => {
    return StyleSheet.create({
        HeaderContainer: {
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 15,
            paddingVertical: 5
        },
        NavigationButton: {
            width: 40,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 2,
            borderColor: theme === "dark" ? colors.primaryLight : colors.primaryDark,
            borderRadius: 20,
            backgroundColor: theme === "dark" ? colors.primaryOrange : colors.primaryYellow
        },
        TitleText: {
            flexShrink: 1,
            paddingLeft: 10,
            fontSize: 20,
            fontFamily: "Manrope_500Medium",
            color: theme === "dark" ? colors.primaryLight : colors.primaryDark
        }
    });
};

export const lightStyles = styles("light");
export const darkStyles = styles("dark");