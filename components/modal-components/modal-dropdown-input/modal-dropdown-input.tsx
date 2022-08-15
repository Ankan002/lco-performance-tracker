import { View, Text } from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { useRecoilValue } from "recoil";
import { themeAtom } from "atoms";
import { Theme } from "typings/theme";
import { lightStyles, darkStyles } from "./styles";
import { Manrope_500Medium, useFonts } from "@expo-google-fonts/manrope";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "constants/colors";
import { QuizCategory } from "typings/quiz-category";

interface DropdownSchema {
  label: string;
  value: string;
}

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  items: Array<DropdownSchema>;
  setItems?: Dispatch<SetStateAction<Array<any>>>;
  value: string;
  setValue: Dispatch<SetStateAction<QuizCategory>>;
  placeholder: string;
  title: string;
}

const ModalDropdownInput = (props: Props) => {
  const {
    open,
    setOpen,
    items,
    value,
    setValue,
    placeholder,
    title,
    setItems,
  } = props;

  const currentTheme = useRecoilValue<Theme>(themeAtom);

  const [fontsLoaded] = useFonts({
    Manrope_500Medium,
  });

  return (
    <View
      style={
        currentTheme === "dark"
          ? darkStyles.DropdownInputContainer
          : lightStyles.DropdownInputContainer
      }
    >
      {fontsLoaded && (
        <Text
          style={
            currentTheme === "dark"
              ? darkStyles.TitleText
              : lightStyles.TitleText
          }
        >
          {title}
        </Text>
      )}

      {fontsLoaded && (
        <DropDownPicker
          open={open}
          value={value}
          setOpen={setOpen}
          setValue={setValue}
          items={items}
          setItems={setItems}
          placeholder={placeholder}
          placeholderStyle={
            currentTheme === "dark"
              ? darkStyles.DropdownPlaceholder
              : lightStyles.DropdownPlaceholder
          }
          style={
            currentTheme === "dark" ? darkStyles.Dropdown : lightStyles.Dropdown
          }
          zIndex={10}
          dropDownContainerStyle={
            currentTheme === "dark"
              ? darkStyles.DropdownContainer
              : lightStyles.DropdownContainer
          }
          labelStyle={
            currentTheme === "dark"
              ? darkStyles.DropdownLabel
              : lightStyles.DropdownLabel
          }
          listItemLabelStyle={
            currentTheme === "dark"
              ? darkStyles.DropdownListLabel
              : lightStyles.DropdownListLabel
          }
          selectedItemLabelStyle={
            currentTheme === "dark"
              ? darkStyles.DropdownListSelectedLabel
              : lightStyles.DropdownListSelectedLabel
          }
          ArrowUpIconComponent={() => (
            <Ionicons
              name="chevron-up"
              size={25}
              color={
                currentTheme === "dark"
                  ? colors.primaryLight
                  : colors.primaryDark
              }
            />
          )}
          ArrowDownIconComponent={() => (
            <Ionicons
              name="chevron-down"
              size={25}
              color={
                currentTheme === "dark"
                  ? colors.primaryLight
                  : colors.primaryDark
              }
            />
          )}
          showTickIcon={false}
          bottomOffset={100}
        />
      )}
    </View>
  );
};

export default ModalDropdownInput;
