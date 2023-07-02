import { StyleSheet } from "react-native";
import { DeviceWidth, ios } from "../../utils";


export const styles = StyleSheet.create({
    container: { flex: 1, paddingTop: ios ? 50 : 80, backgroundColor: "black" },
    listView: {
      flex: 1,
    },
    headerShadow: {
      zIndex: 100,
      position: "absolute",
      top: ios ? 50 : 30,
      resizeMode: "stretch",
      height: 80,
      width: DeviceWidth,
    },
    searchIcon: {
      resizeMode: "contain",
      height: 30,
      width: 20,
      tintColor: "white",
    },
    backIcon: { resizeMode: "contain", height: 30, width: 20 },
    headerTitle: {
      color: "white",
      fontFamily: "light",
      fontSize: 24,
    },
    headerTitleContainer:{ flex: 1, paddingLeft: 10, backgroundColor: "transparent" }
  });