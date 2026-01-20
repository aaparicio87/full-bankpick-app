import { ConfigContext, ExpoConfig } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
    ...config,
    name: "bankpick",
    slug: "bankpick",
    scheme: "bankpick",
    version: "1.0.0",
    orientation: "portrait",
    newArchEnabled: true,
    ios: {
      bundleIdentifier: "com.dlapa.bankpick",
      supportsTablet: true,
      icon: {
        dark: "./assets/ios-dark.png",
        light: "./assets/ios-light.png",
        tinted: "./assets/ios-tinted.png"
      }
    },
    android: {
      package: "com.dlapa.bankpick",
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      edgeToEdgeEnabled: true,
      predictiveBackGestureEnabled: false
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          "backgroundColor": "#ffffff",
          "image": "./assets/splash-icon.png",
          "dark": {
            "image": "./assets/splash-icon.png",
            "backgroundColor": "#161622"
          },
          "imageWidth": 200
        }
      ],
      [
        "expo-asset",
        {
          "assets": [
            "./assets/images/onboarding1.png", 
            "./assets/images/onboarding2.png",
            "./assets/images/onboarding3.png"
          ]
        }
      ],
      [
        "expo-font",
        {
          "fonts": [  
            "./assets/fonts/Poppins-Regular.ttf",
            "./assets/fonts/Poppins-Medium.ttf",
            "./assets/fonts/Poppins-SemiBold.ttf",
            "./assets/fonts/Poppins-Bold.ttf"
          ],
        }
      ]
    ]
});