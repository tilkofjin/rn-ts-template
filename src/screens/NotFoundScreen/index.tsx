import { View, Text } from "components/Themed";
import * as React from "react";
import { FC } from "react";
import { Button, StyleSheet, TouchableOpacity } from "react-native";
import { RootStackScreenProps } from "src/types";

const NotFoundScreen: FC<RootStackScreenProps<"NotFound">> = ({
  route,
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.btnBox}>
        <Text style={styles.title}>404 Not Found {route?.path}</Text>
        <TouchableOpacity
          onPress={() => navigation.replace("Root")}
          style={styles.link}
        >
          <Text style={styles.linkText}>Go to home screen!</Text>
        </TouchableOpacity>
        <Button
          title="Go to home"
          color="#f194ff"
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
};

export default NotFoundScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  btnBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
