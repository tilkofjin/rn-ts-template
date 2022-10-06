import { StyleSheet } from "react-native";
import React, { FC } from "react";
import * as Device from "expo-device";
import { RootTabScreenProps } from "src/types";
import { View, Text } from "components/Themed";

const TabOne: FC<RootTabScreenProps<'TabOne'>> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <Text onPress={() => navigation.push('Login')}>
        {Device?.manufacturer ? `${Device.manufacturer}:${Device.modelName}` : null}
      </Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
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
