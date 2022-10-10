import { Pressable, StyleSheet, useColorScheme } from "react-native";
import React, { ComponentProps } from "react";
import { RootTabParamList, RootTabScreenProps } from "src/types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Colors from "constants/Colors";
import TabOne from "screens/TabOne";
import TabTwo from "screens/TabTwo";
import { FontAwesome } from "@expo/vector-icons";
import { useAppSelector } from "stores/store/storeHooks";

const BottomTab = createBottomTabNavigator<RootTabParamList>();

const TabBarIcon = (props: {
  color: string;
  name: ComponentProps<typeof FontAwesome>["name"];
}) => <FontAwesome size={25} {...props} />;

const BottomTabNav = () => {
  const themeState = useAppSelector((state) => state.theme);

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: themeState.theme
          ? Colors[themeState.theme].tint
          : undefined,
      }}
    >
      <BottomTab.Screen
        name="TabOne"
        component={TabOne}
        options={({ navigation }: RootTabScreenProps<"TabOne">) => ({
          title: "首页",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Modal")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="info-circle"
                size={25}
                color={themeState.theme ? Colors[themeState.theme].text : undefined}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwo}
        options={() => ({
          title: "我的",
          tabBarIcon: ({ color }) => <TabBarIcon name="user-o" color={color} />,
        })}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNav;

const styles = StyleSheet.create({});
