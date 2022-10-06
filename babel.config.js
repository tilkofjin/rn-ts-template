module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            navigation: "./src/navigation",
            components: "./src/components",
            constants: "./src/constants",
            screens: "./src/screens",
            images: "./src/images",
            stores: "./src/stores",
            hooks: "./src/hooks",
            assets: "./assets",
          },
          extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
        },
      ],
      "react-native-reanimated/plugin", // 动画
    ],
    env: {
      // 正式环境异常 log
      production: {
        plugins: ["transform-remove-console"],
      },
    },
  };
};
