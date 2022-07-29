import { View, Text } from "react-native";
import React from "react";
import { useRecoilValue } from "recoil";
import { themeAtom } from "atoms";
import { colors } from "constants/colors";
import { lightStyles, darkStyles } from "./styles";
import { Theme } from "typings/theme";
import { ModernDatePicker } from "components/modern-datepicker";
import moment from "moment";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useFonts, Manrope_500Medium } from "@expo-google-fonts/manrope";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  useCustomDate: boolean;
  setUseCustomDate: Function;
  checkBoxText: string;
  title: string;
  quizDate: string;
  setQuizDate: Function;
}

const ModalDatePicker = (props: Props) => {
  
  const { useCustomDate, setUseCustomDate, checkBoxText, title, quizDate, setQuizDate } = props;
  const currentTheme = useRecoilValue<Theme>(themeAtom);

  const [fontsLoaded] = useFonts({
    Manrope_500Medium
  });

  const onCheckboxStateChange = (isChecked: boolean) => {
    if (!isChecked){
      setQuizDate(moment().format("YYYY-MM-DD"));
    }
    setUseCustomDate(isChecked);
  }
    
  return (
    <View style={currentTheme === "dark" ? darkStyles.DatePickerContainer : lightStyles.DatePickerContainer}>

      {
        fontsLoaded && (
          <>
            <Text style={currentTheme === "dark" ? darkStyles.Title : lightStyles.Title}>
              {title}
            </Text>

            <Text style={currentTheme === "dark" ? darkStyles.Date : lightStyles.Date}>
              {quizDate}
            </Text>

            <BouncyCheckbox
              size={25}
              fillColor={currentTheme === "dark" ? colors.primaryOrange : colors.primaryYellow}
              unfillColor={currentTheme === "dark" ? colors.secondaryDark : colors.secondaryLight}
              iconStyle={currentTheme === "dark" ? darkStyles.CheckboxIconStyle : lightStyles.CheckboxIconStyle}
              innerIconStyle={currentTheme === "dark" ? darkStyles.CheckboxInnerIconStyle : lightStyles.CheckboxInnerIconStyle}
              textStyle={currentTheme === "dark" ? darkStyles.CheckboxTextStyle : lightStyles.CheckboxTextStyle}
              style={currentTheme === "dark" ? darkStyles.CheckboxContainer : lightStyles.CheckboxContainer}
              ImageComponent={() => (<Ionicons name="ios-checkmark-sharp" size={20} color={currentTheme === "dark" ? colors.primaryLight : colors.primaryDark} />)}
              isChecked={useCustomDate}
              onPress={onCheckboxStateChange}
              text={checkBoxText}
              textContainerStyle={currentTheme === "dark" ? darkStyles.CheckboxTextContainer : lightStyles.CheckboxTextContainer}
            />
          </>
        )
      }
      
      {
        useCustomDate && fontsLoaded && (
          <ModernDatePicker
            options={{
              backgroundColor: currentTheme === "dark" ? colors.secondaryDark : colors.secondaryLight,
              textHeaderColor: colors.primaryOrange,
              textDefaultColor: currentTheme === "dark" ? colors.primaryLight : colors.primaryDark,
              selectedTextColor: currentTheme === "dark" ? colors.secondaryLight : colors.secondaryDark,
              mainColor: colors.primaryOrange,
              textSecondaryColor: colors.primaryOrange,
              borderColor: currentTheme === "dark" ? colors.primaryLight : colors.primaryDark,
            }}
            current={quizDate}
            selected={quizDate}
            maximumDate={moment().format("YYYY-MM-DD")}
            mode="calendar"
            style={currentTheme === "dark" ? darkStyles.DatePicker : lightStyles.DatePicker}
            onDateChange={(date) => {
              setQuizDate(moment(date, "YYYY/MM/DD").format("YYYY-MM-DD"));
            }}
          />
        )
      }
      
    </View>
    
  );
};

export default ModalDatePicker;
