import { Button, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import * as Device from "expo-device";

const Home: FC<NativeStackScreenProps<any>> = ({ navigation: { goBack } }) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Text onPress={() => goBack()}>
        {Device.manufacturer}: {Device.modelName}
      </Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {},
});
