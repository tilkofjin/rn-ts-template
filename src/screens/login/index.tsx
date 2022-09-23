import { Button, StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
const wechatIcon = require("images/icons/wechat.png");

const Login = ({ navigation }: any) => {
  const [isChecked, setChecked] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("");

  const wechatLogin = () => {
    navigation.push("Home");
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleBox}>
        <View>
          <Image source={wechatIcon} style={styles.logo} />
          <Image source={wechatIcon} style={{ width: 305, height: 159 }} />
        </View>
        <View style={styles.serviceCenter}>
          <Text>XXX 服务中心</Text>
        </View>
      </View>
      <View style={styles.wechatBtnBox}>
        <Button
          title="微信授权登录"
          color="#f194ff"
          onPress={() => wechatLogin()}
        />
      </View>

      {/* 微信Icon */}
      <View style={styles.wechatIconBox}>
        <Image source={wechatIcon} style={styles.wechatIcon} />
      </View>
      <View style={styles.loginDecBox}>
        <View style={styles.checkboxContainer}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? "#4630EB" : undefined}
          />
          <Text style={styles.loginDecText}>登录代表同意平台的</Text>
        </View>
        <Text style={styles.loginDecExplain} onPress={() => {}}>
          《用户服务协议》
        </Text>
        <Text>及</Text>
        <Text style={styles.loginDecExplain} onPress={() => {}}>
          《隐私政策》
        </Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {},
  logo: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  titleBox: {},
  serviceCenter: {},
  wechatAuth: {},
  wechatBtnBox: {},
  wechatIconBox: {},
  wechatIcon: {
    width: 75,
    height: 75,
  },

  checkboxContainer: {
    flexDirection: "row",
  },
  checkbox: {
    margin: 8,
  },
  loginDecBox: {},
  loginDecText: {},
  loginDecExplain: {},
});
