import { View, Text } from "react-native";
import { Switch } from "react-native-switch";
import React from "react";
import { useRecoilValue } from "recoil";
import { themeAtom } from "atoms/theme-atom";
import { Theme } from "typings/theme";
import { lightStyles, darkStyles } from "./styles";
import { Manrope_400Regular, useFonts } from "@expo-google-fonts/manrope";
import { colors } from "constants/colors";

interface Props {
  value: boolean;
  onChange: (value: boolean) => void;
  title: string;
}

const ToogleSwitch = (props: Props) => {
  const { value, onChange, title } = props;
  const currentTheme = useRecoilValue<Theme>(themeAtom);

  const [fontsLoaded] = useFonts({
    Manrope_400Regular,
  });

  return (
    <View
      style={
        currentTheme === "dark"
          ? darkStyles.ToggleSwitchContainer
          : lightStyles.ToggleSwitchContainer
      }
    >
      {fontsLoaded && (
        <Text
          style={currentTheme === "dark" ? darkStyles.Title : lightStyles.Title}
        >
          {title}
        </Text>
      )}

      <Switch
        value={value}
        onValueChange={onChange}
        renderActiveText={false}
        renderInActiveText={false}
        innerCircleStyle={
          currentTheme === "dark"
            ? darkStyles.SwicthButton
            : lightStyles.SwicthButton
        }
        circleActiveColor={colors.primaryLight}
        circleInActiveColor={colors.primaryLight}
        barHeight={20}
        circleSize={20}
        switchRightPx={1.5}
        backgroundActive={colors.primaryYellow}
        backgroundInactive={colors.primaryOrange}
        containerStyle={
          currentTheme === "dark" ? darkStyles.Switch : lightStyles.Switch
        }
      />
    </View>
  );
};

export default ToogleSwitch;
