import AsyncStorage from "@react-native-async-storage/async-storage"
import { Theme } from "typings/theme";

export const getSavedTheme = async() => {
    const savedTheme = await AsyncStorage.getItem("theme");

    if(!savedTheme) {
        await AsyncStorage.setItem("theme", "dark");
        return "dark";
    }

    return savedTheme as unknown as Theme;
}