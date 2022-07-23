import { colors } from "constants/colors";
import { StyleSheet, Platform, StatusBar } from "react-native";
import type { Theme } from "typings/theme";

const styles = (theme: Theme) => {
    return StyleSheet.create({
        ScreenContainer: {
            flex: 1,
            backgroundColor: theme === "dark" ? colors.primaryDark : colors.primaryLight,
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
        },
        Text: {
            color: theme === "dark" ? colors.primaryLight : colors.secondaryDark
        }
    });
};

export const darkStyles = styles("dark");
export const lightStyles = styles("light");