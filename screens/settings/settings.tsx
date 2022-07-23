import { SafeAreaView, Button } from "react-native";
import React from "react";
import { lightStyles, darkStyles } from "./styles";
import { StatusBar } from "expo-status-bar";
import { useRecoilState } from "recoil";
import { themeAtom } from "atoms";
import { Theme } from "typings/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MainTitleHeader, ToggleSwitch } from "components";

const Settings = () => {

  const [currentTheme, setCurrentTheme] = useRecoilState<Theme>(themeAtom);

  const changeTheme = async() => {
    await AsyncStorage.setItem("theme", currentTheme === "dark" ? "light" : "dark");
    setCurrentTheme(currentTheme === "dark" ? "light" : "dark");
  }

  return (
    <SafeAreaView style={currentTheme === "dark" ? darkStyles.ScreenContainer : lightStyles.ScreenContainer}>
      <MainTitleHeader title="Settings" />
      <ToggleSwitch value={currentTheme === "dark"} onChange={changeTheme} title="Dark Mode" />
      <StatusBar style={currentTheme === "dark" ? "light" : "dark"} />
    </SafeAreaView>
  );
};

export default Settings;