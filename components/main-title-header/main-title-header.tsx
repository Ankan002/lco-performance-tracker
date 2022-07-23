import { View, Text } from "react-native";
import React from "react";
import { useRecoilValue } from "recoil";
import { themeAtom } from "atoms/theme-atom";
import type { Theme } from "typings/theme";
import { Manrope_500Medium, useFonts } from "@expo-google-fonts/manrope";
import { lightStyles, darkStyles } from "./styles";

interface Props{
    title: string;
}

const MainTitleHeader = (props: Props) => {

  const { title } = props;
  const currentTheme = useRecoilValue<Theme>(themeAtom);
  const [fontsLoaded] = useFonts({
    Manrope_500Medium
  });

  return (
    <View style={currentTheme === "dark" ? darkStyles.HeaderContainer : lightStyles.HeaderContainer}>
      {
        fontsLoaded && (
            <Text style={currentTheme === "dark" ? darkStyles.Title : lightStyles.Title}>
        {title}
      </Text>
        )
      }
    </View>
  );
};

export default MainTitleHeader;
