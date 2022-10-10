import { StatusBar } from "expo-status-bar";
import React, { FC } from "react";
import { StyleSheet } from "react-native";
import { RootStackScreenProps } from "src/types";
import { Text, View } from "components/Themed";

const ModalScreen: FC<RootStackScreenProps<"Modal">> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="#60c337">
        <Text
          onPress={() => navigation.goBack()}
          lightColor="darkgray"
          darkColor="lightgray"
        >
          navigation goBack
        </Text>
      </View>
      <StatusBar />
    </View>
  );
};

export default ModalScreen;

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
    textAlign: "center",
    marginVertical: 10,
    height: 1,
    width: "80%",
  },
});
