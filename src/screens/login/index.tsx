import { Button, StyleSheet, Image } from "react-native";
import React, { FC, useEffect, useState } from "react";
import { Text, View } from "components/Themed";
import Checkbox from "expo-checkbox";
import { RootStackScreenProps } from "src/types";
import { useAppDispatch, useAppSelector } from "stores/store/storeHooks";
import { TextInput } from "react-native-gesture-handler";
import { setPassword, setUsername, setToken, login } from "stores/reducers/Login";
import { useLazyGetPostsListQuery } from "services/modules/Login";
const wechatIcon = require("../../../assets/images/icons/wechat.png");

const Login: FC<RootStackScreenProps<"Login">> = ({ navigation, route }) => {
  const [isChecked, setIsChecked] = useState(false);
  const loginState = useAppSelector((state) => state.login);
  const dispatch = useAppDispatch();
  const [,{ data }] = useLazyGetPostsListQuery();
  console.log("🚀 ~ file: index.tsx ~ line 17 ~ data", data);
  useEffect(() => {
    if (loginState.authentication) {
      navigation.push("Root");
    }
  }, [loginState.authentication]);

  return (
    <View style={styles.container}>
      <View style={styles.wechatBox}>
        <Image source={wechatIcon} style={styles.wechatIcon} />
      </View>
      <View style={styles.inputBox}>
        <Text>用户名:</Text>
        <TextInput
          maxLength={30}
          selectTextOnFocus
          style={styles.input}
          value={loginState.username}
          onChangeText={(value) => dispatch(setUsername(value))}
          placeholder=" please input username"
        />
      </View>
      <View style={styles.inputBox}>
        <Text>{"密    码:"}</Text>
        <TextInput
          maxLength={30}
          selectTextOnFocus
          style={styles.input}
          value={loginState.password}
          onChangeText={(value) => dispatch(setPassword(value))}
          placeholder=" please input password"
        />
      </View>
      {/* btn */}
      <View style={styles.loginDecBox}>
        <Button
          title="微信授权登录"
          color="#f194ff"
          onPress={() => {
            dispatch(setToken(`123456`))
            isChecked && dispatch(login())
          }}
        />
        <View style={styles.checkboxBox}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setIsChecked}
            color={isChecked ? "#4630EB" : undefined}
          />
          <Text onPress={() => setIsChecked(!isChecked)}>
            登录代表同意平台的
            <Text>
              《用户服务协议》
              <Text>
                及<Text>《隐私政策》</Text>
              </Text>
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  input: {
    height: 30,
    margin: 12,
    width: "80%",
    borderWidth: 1,
    borderRadius: 3,
  },
  wechatBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  wechatIcon: {
    width: 75,
    height: 75,
    borderRadius: 10,
    textAlign: "center",
  },
  checkboxBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  descBox: {
    display: "flex",
  },
  checkbox: {
    margin: 8,
  },
  loginDecBox: {
    display: "flex",
    marginTop: 20,
  },
});
