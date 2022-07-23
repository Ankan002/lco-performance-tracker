import { StyleSheet } from "react-native";
import { Theme } from "typings/theme";
import { colors } from "constants/colors";

const styles = (theme: Theme) => {
    return StyleSheet.create({
        BodyContainer: {
            flexGrow: 1,
            width: "100%",
            position: "relative"
        }
    });
};

export const lightStyles = styles("light");
export const darkStyles = styles("dark");