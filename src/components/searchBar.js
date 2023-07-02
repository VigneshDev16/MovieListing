import React from "react";
import { Image, TextInput, View } from "react-native";
import SearchIcon from "../assets/images/search.png";

export const SearchBar = ({ onSearch }) => {
  return (
    <View
      style={{
        zIndex: 200,
        flexDirection: "row",
        borderRadius: 10,
        backgroundColor: "white",
        margin: 10,
      }}
    >
      <TextInput
        style={{
          height: 40,
          fontFamily: "light",
          fontSize: 20,
          paddingLeft: 5,
          flex: 1,
        }}
        underlineColorAndroid="transparent"
        placeholder="Search"
        onChangeText={onSearch}
      ></TextInput>
      <Image
        source={SearchIcon}
        style={{
          resizeMode: "contain",
          height: 30,
          width: 20,
          tintColor: "black",
          alignSelf: "center",
          marginHorizontal: 10,
        }}
      />
    </View>
  );
};
