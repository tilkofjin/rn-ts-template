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
            services: "./src/services",
            '@config': "./src/config",
            screens: "./src/screens",
            images: "./src/images",
            stores: "./src/stores",
            hooks: "./src/hooks",
            utils: "./src/utils",
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
