import { View, Text } from "react-native";
import React from "react";
import { CSSProperties } from "react";
import DatePicker from "react-native-modern-datepicker";

interface Props {
    options: {
        backgroundColor: string,
        textHeaderColor: string,
        textDefaultColor: string,
        selectedTextColor: string,
        mainColor: string,
        textSecondaryColor: string,
        borderColor: string,
    };
    current: string;
    selected: string;
    mode: "calendar" | "time";
    style: CSSProperties;
    maximumDate?: string;
    onDateChange?: (dateString: string) => void 
}

type Component = (props: Props) => JSX.Element

const MyDatePicker = DatePicker as Component

const ModernDatePicker = (props: Props) => { 

  return (
    <MyDatePicker
      {...props}
    />
  );
};

export default ModernDatePicker;
