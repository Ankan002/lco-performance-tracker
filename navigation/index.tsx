import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, {useEffect, useRef} from 'react';

import { QuizzesScreen, SettingsScreen } from 'screens';
import { RootStackParamList, RootTabParamList } from '../types';
import LinkingConfiguration from 'navigation/LinkingConfiguration';
import { getSavedTheme } from "helpers";
import { useRecoilState } from "recoil";
import { quizResultsAtom, themeAtom } from "atoms";
import { Theme } from 'typings/theme';
import { LightNavigatorTheme, DarkNavigatorTheme } from 'themes';
import { colors } from 'constants/colors';
import { QuizResult } from 'typings/quiz-result';

export default function Navigation() {

  const isAppMounted = useRef<boolean>(false);
  const [currentTheme, setCurrentTheme] = useRecoilState<Theme>(themeAtom);
  const [quizResults, setQuizResults] = useRecoilState<Array<QuizResult>>(quizResultsAtom);

  const onAppLoad = async() => {
    const savedTheme = await getSavedTheme();

    setCurrentTheme(savedTheme);
  }

  useEffect(() => {
    if(isAppMounted.current) return;

    isAppMounted.current = true;

    onAppLoad();
  }, []);

  useEffect(() => {
    console.log(quizResults);
  }, [quizResults]);

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={currentTheme === 'dark' ? DarkNavigatorTheme : LightNavigatorTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}


const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}


const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {

  return (
    <BottomTab.Navigator
      initialRouteName="Quizzes"
      screenOptions={{
        tabBarActiveTintColor: colors.primaryOrange,
        tabBarInactiveTintColor: colors.lightGrey,
        headerShown: false
      }}>
      <BottomTab.Screen
        name="Quizzes"
        component={QuizzesScreen}
        options={{
          title: 'Quizzes',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="lightbulb-on-outline" color={color} size={30} />,
          tabBarShowLabel: false
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <Ionicons name="settings" color={color} size={30} />,
          tabBarShowLabel: false
        }}
      />
    </BottomTab.Navigator>
  );
}
