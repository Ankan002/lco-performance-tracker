import { StyleSheet } from "react-native";
import { Theme } from "typings/theme";
import { colors } from "constants/colors";

const styles = (theme: Theme) => {
    return StyleSheet.create({
        ModalContainer: {
            backgroundColor: colors.semiTransparent,
            flex: 1,
            justifyContent: "flex-end"
        },
        AddResultContainer: {
            height: "90%",
            width: "100%",
            backgroundColor: theme === "dark" ? colors.primaryDark : colors.primaryLight,
            borderTopWidth: 2,
            borderLeftWidth: 2,
            borderRightWidth: 2,
            borderTopColor: theme === "dark" ? colors.primaryLight : colors.primaryDark,
            borderRightColor: theme === "dark" ? colors.primaryLight : colors.primaryDark,
            borderLeftColor: theme === "dark" ? colors.primaryLight : colors.primaryDark,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            paddingVertical: 10
        },
        ActionButtonContainer: {
            flexGrow: 1,
            minHeight: 70,
            width: "100%",
            paddingVertical: 5,
            paddingHorizontal: 15,
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "center",
        },
        NumericInputContainer: {
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center",
            width: "100%"
        }
    });
};

export const lightStyles = styles("light");
export const darkStyles = styles("dark");