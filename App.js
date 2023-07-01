import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { fonts } from "./src/utils";
import AppLoading from "expo-app-loading";

export default function App() {
  const [isLoaded] = useFonts(fonts);
  if (!isLoaded) return <AppLoading />;
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "boldFont" }}>
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
