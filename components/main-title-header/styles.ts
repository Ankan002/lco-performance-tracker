import { StyleSheet } from "react-native";
import { colors } from "constants/colors";
import { Theme } from "typings/theme";

const styles = (theme: Theme) => {
    return StyleSheet.create({
        HeaderContainer: {
            width: "100%",
            flexDirection: "row",
            marginVertical: 15,
            justifyContent: "center",
            alignItems: "center"
        },
        Title: {
            fontSize: 22,
            color: theme === "dark" ? colors.secondaryLight : colors.secondaryDark,
            fontFamily: "Manrope_500Medium"
        }
    });
};

export const lightStyles = styles("light");
export const darkStyles = styles("dark");