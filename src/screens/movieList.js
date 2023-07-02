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
  ImageBackground,
  SafeAreaView,
  Platform,
} from "react-native";
import { DeviceWidth, formatListData, getData, ios, numColumns } from "../utils";
import MovieTile from "../components/movieTile";
import { useNavigation } from "@react-navigation/native";
import BackIcon from "../assets/images/Back.png";
import HeaderBg from "../assets/images/nav_bar.png";
import SearchIcon from "../assets/images/search.png";
import CloseIcon from "../assets/images/close.png";
import { SearchBar } from "../components/searchBar";
import { Header } from "react-native/Libraries/NewAppScreen";


export default function MovieList() {
  const [data, setdata] = useState([]);
  const [currData, setCurrData] = useState([]);
  const [page, setPage] = useState(0);
  const [showSearch, setShowSearch] = useState(false);
  const navigation = useNavigation();
  useEffect(() => {
    console.log("---> page", page);
    let res = getData(page);
    if (res) {
      setCurrData((curval) => {
        if (!showSearch)
          setdata(curval.concat(getData(page).page["content-items"].content));
        return curval.concat(getData(page).page["content-items"].content);
      });
    }
  }, [page]);

  useLayoutEffect(() => {
    navigation.setOptions(getNavBar());
  }, [navigation, showSearch]);

  const ImageHeader = (props) => (
    <View style={{ backgroundColor: "#eee" }}>
      <Image style={StyleSheet.absoluteFill} source={HeaderBg} />
      <Header {...props} style={{ backgroundColor: "transparent" }} />
    </View>
  );

  const getNavBar = () => {
    return {
      title: "Romantic Comedy",
      headerTransparent: true,
      headerTitle: (props) => (
        <View style={{ flex: 1, paddingLeft: 10,backgroundColor:'transparent' }}>
          <Text
            style={{
              color: "white",
              fontFamily: "light",
              fontSize: 24,
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
              if (showSearch) setdata(currData);
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

  const onSearch = (searchKey) => {
    console.log("--->search text", searchKey);
    setTimeout(() => {
      if (searchKey) {
        setdata(
          currData.filter((item) =>
            item.name.toLowerCase().includes(searchKey.toLowerCase())
          )
        );
      } else setdata(currData);
    }, 500);
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={HeaderBg}
        style={{
          zIndex: 100,
          position: "absolute",
          top: ios ? 50 : 30,
          resizeMode: "stretch",
          height: 80,
          width: DeviceWidth,
        }}
      />
      {showSearch && <SearchBar onSearch={onSearch} />}
      <FlatList
        data={formatListData(data, numColumns)}
        style={styles.listView}
        renderItem={MovieTile}
        numColumns={numColumns}
        onEndReached={() => setPage(page + 1)}
        onEndReachedThreshold={0.7}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: ios? 50 : 80 , backgroundColor: "black" },
  listView: {
    flex: 1,
  },
});
