import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { DeviceWidth, formatListData, getData, numColumns } from "../utils";
import MovieTile from "../components/movieTile";
import { useNavigation } from "@react-navigation/native";
import BackIcon from "../assets/images/Back.png";
import HeaderBg from "../assets/images/nav_bar.png";
import SearchIcon from "../assets/images/search.png";
import CloseIcon from "../assets/images/close.png";
import { SearchBar } from "../components/searchBar";

export default function MovieList() {
  const [data, setdata] = useState([]);
  const [currData, setCurrData] = useState([]);
  const [page, setPage] = useState(0);
  const [showSearch, setShowSearch] = useState(false);
  const navigation = useNavigation();
  useEffect(() => {
    console.log('---> page',page)
    let res = getData(page);
    if (res) {
      setCurrData((curval) => {
        setdata(curval.concat(getData(page).page["content-items"].content));
        return curval.concat(getData(page).page["content-items"].content)
      });
    }
  }, [page]);

  useLayoutEffect(() => {
    navigation.setOptions(getNavBar());
  }, [navigation, showSearch]);

  const getNavBar = () => {
    return {
      title: "Romantic Comedy",
      headerStyle: {
        backgroundColor: "black",
        zIndex: 10,
      },
      headerBackground: () => {
        return (
          <Image
            source={HeaderBg}
            style={{ zIndex: 3 }}
            // style={{ resizeMode: "contain", height: 30, width: 20 }}
          />
        );
      },
      headerTitle: (props) => (
        <View style={{ flex: 1, flexDirection: "row", paddingLeft: 10 }}>
          <Text
            style={{
              color: "white",
              fontFamily: "light",
              fontSize: 25,
            }}
          >
            {props.children}
          </Text>
        </View>
      ),
      headerLeft: () => {
        return (
          <Image
            source={BackIcon}
            style={{ resizeMode: "contain", height: 30, width: 20 }}
          />
        );
      },
      headerRight: () => {
        return (
          <TouchableOpacity
            onPress={() => {
              console.log("---> on press");
              if(showSearch)
              setdata(currData)
              setShowSearch((currVal) => !currVal);
            }}
          >
            <Image
              source={showSearch ? CloseIcon : SearchIcon}
              style={{
                resizeMode: "contain",
                height: 30,
                width: 20,
                tintColor: "white",
              }}
            />
          </TouchableOpacity>
        );
      },
    };
  };

  console.log("---> showsearch", showSearch);
  const onSearch = (searchKey) => {
    console.log("--->search text", searchKey);
    setTimeout(() => {
      if (searchKey){
        setdata(
          currData.filter((item) =>
            item.name.toLowerCase().includes(searchKey.toLowerCase())
          )
        );}
        else setdata(currData)
    }, 500);
  };
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      {showSearch && <SearchBar onSearch={onSearch} />}
      <FlatList
        // data={formatListData(data, numColumns)}
        data={data}
        style={styles.container}
        renderItem={MovieTile}
        numColumns={numColumns}
        onEndReached={() => setPage(page + 1)}
        onEndReachedThreshold={0.7}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
