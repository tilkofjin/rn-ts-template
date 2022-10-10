import { Button, StyleSheet, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import * as Device from "expo-device";
import { RootTabScreenProps } from "src/types";
import { View, Text } from "components/Themed";
import { useAppDispatch, useAppSelector } from "stores/store/storeHooks";
import { changeTheme } from "stores/reducers/Theme";

const TabOne: FC<RootTabScreenProps<"TabOne">> = ({ navigation }) => {
  const themeState = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  const onChangeTheme = ({
    theme,
    darkMode,
  }: Record<string, string | boolean | null>) => {
    dispatch(changeTheme({ theme, darkMode }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <Text onPress={() => navigation.push("Login")}>
        {Device?.manufacturer
          ? `${Device.manufacturer}:${Device.modelName}`
          : null}
      </Text>
      <TouchableOpacity onPress={() => onChangeTheme({ darkMode: null })}>
        <Text>{themeState.theme}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onChangeTheme({ theme: "dark", darkMode: true })}
      >
        <Text>Dark</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onChangeTheme({ theme: "light", darkMode: false })}
      >
        <Text>Light</Text>
      </TouchableOpacity>
      <Button
        color="#f194ff"
        title="go postsScreen"
        onPress={() => navigation.push("Posts")}
      />
    </View>
  );
};

export default TabOne;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
