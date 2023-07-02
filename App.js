import React, { useLayoutEffect, useEffect } from "react";
import { useFonts } from "expo-font";
import { fonts } from "./src/utils";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from "expo-splash-screen";
import MovieList from "./src/screens/movieList/movieListScreen";

const Stack = createNativeStackNavigator();

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
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Romantic Comedy" component={MovieList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
