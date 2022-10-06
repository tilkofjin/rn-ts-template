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
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LinkingConfiguration from "./LinkingConfig";

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
    </Stack.Navigator>
  );
};

export const Navigation = ({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) => {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
};
