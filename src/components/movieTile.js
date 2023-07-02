import React from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import { DeviceHeight, DeviceWidth, numColumns } from "../utils";
import { imageList } from "../assets/images";

export default function MovieTile({ item, index }) {
  let imageUrl = imageList["placeHolder"];

  if (item.empty === true) {
    return <View style={[styles.item, styles.itemInvisible]} />;
  } else {
    imageUrl = item["poster-image"]
      ? imageList[item["poster-image"]] ?? imageList["placeHolder"]
      : imageList["placeHolder"];
  }

  return (
    <View style={styles.item}>
      <Image source={imageUrl} style={styles.itemImage} />
      <Text style={styles.itemText} numberOfLines={1}>
        {item?.name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  item: {
    // backgroundColor: '#4D243D',
    flex: 1,
    marginHorizontal: 7,
    marginBottom: 30,
    height: (DeviceHeight / numColumns) * 0.8, // approximate a square
  },
  itemInvisible: {
    backgroundColor: "transparent",
  },
  itemImage: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
  },
  itemText: {
    color: "white",
    textAlign: "left",
    fontFamily: "light",
    flexWrap: "wrap",
    marginTop: -10,
  },
});
