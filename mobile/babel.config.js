module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@components": "./src/components",
            "@contexts": "./src/contexts",
            "@state": "./src/state",
            "@features": "./src/features",
            "@hooks": "./src/hooks",
            "@styles": "./src/styles",
            "@storage": "./src/storage",
            "@utils": "./src/utils",
            "@/types": "./src/types",
          },
          extensions: [
            ".js",
            ".jsx",
            ".ts",
            ".tsx",
            ".png",
            ".jpg",
            ".ttf",
            "jpeg",
          ],
        },
      ],
    ],
  };
};
