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
            screens: "./src/screens",
            images: "./src/images",
            assets: "./assets",
          },
          extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
        },
      ],
      "react-native-reanimated/plugin", // 动画
    ],
  };
};
