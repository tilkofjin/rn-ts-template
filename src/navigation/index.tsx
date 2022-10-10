import React from "react";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import LoginScreen from "screens/Login";
import { ColorSchemeName } from "react-native";
import { RootStackParamList } from "src/types";
import BottomTabNavigator from "screens/BottomTabNav";
import NotFoundScreen from "screens/NotFoundScreen";
import ModalScreen from "screens/ModalScreen";
import PostsScreen from "screens/PostsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAppSelector } from "stores/store/storeHooks";
import { navigationRef } from "./utils";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Posts" component={PostsScreen} />
    </Stack.Navigator>
  );
};

export const Navigation = ({
  colorScheme,
}: {
  colorScheme?: ColorSchemeName;
}) => {
  const themeState = useAppSelector((state) => state.theme);
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={
        themeState.theme === "dark" || colorScheme === "dark"
          ? DarkTheme
          : DefaultTheme
      }
    >
      <RootNavigator />
    </NavigationContainer>
  );
};
