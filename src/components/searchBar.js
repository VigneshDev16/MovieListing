import React from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";
import SearchIcon from "../assets/images/search.png";

export const SearchBar = ({ onSearch }) => {
  return (
    <View
      style={styles.container}
    >
      <TextInput
        style={styles.textInput}
        underlineColorAndroid="transparent"
        placeholder="Search"
        onChangeText={onSearch}
      ></TextInput>
      <Image
        source={SearchIcon}
        style={styles.searchIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 200,
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "white",
    margin: 10,
  },
  textInput:{
    height: 40,
    fontFamily: "light",
    fontSize: 20,
    paddingLeft: 5,
    flex: 1,
  },
  searchIcon:{
    resizeMode: "contain",
    height: 30,
    width: 20,
    tintColor: "black",
    alignSelf: "center",
    marginHorizontal: 10,
  }
});