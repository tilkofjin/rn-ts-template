import { StyleSheet, Text } from "react-native";
import React, { FC } from "react";
import { RootTabScreenProps } from "src/types";
import { View } from "components/Themed";

const TabTwo: FC<RootTabScreenProps<"TabTwo">> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title} onPress={() => navigation.push('Login')}>
        Tab Two
      </Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  );
};

export default TabTwo;

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
