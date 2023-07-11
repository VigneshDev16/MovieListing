import React, { useLayoutEffect, useEffect } from "react";
import { useFonts } from "expo-font";
import { fonts } from "./src/utils";
import * as SplashScreen from "expo-splash-screen";
import Navigation from "./src/utils/navigation";

export default function App() {
  const [loaded, error] = useFonts(fonts);

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  useLayoutEffect(() => {
    if (loaded) {
      setTimeout(() => {
        SplashScreen.hideAsync();
      }, 2000);
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    <Navigation/>
  );
}
