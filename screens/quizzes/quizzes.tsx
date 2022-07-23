import { SafeAreaView } from "react-native";
import React from "react";
import { lightStyles, darkStyles } from "./styles";
import { StatusBar } from "expo-status-bar";
import { useRecoilValue } from "recoil";
import { themeAtom } from "atoms";
import { Theme } from "typings/theme";
import { MainTitleHeader, QuizzesBody } from "components";

const Quizzes = () => {
  const currentTheme = useRecoilValue<Theme>(themeAtom);

  return (
    <SafeAreaView style={currentTheme === "dark" ? darkStyles.ScreenContainer : lightStyles.ScreenContainer}>
      <MainTitleHeader title="Quiz Reports" />
      <QuizzesBody />
      {/* <CreateIcon /> */}
      <StatusBar style={currentTheme === "dark" ? "light" : "dark"} />
    </SafeAreaView>
  );
};

export default Quizzes;
