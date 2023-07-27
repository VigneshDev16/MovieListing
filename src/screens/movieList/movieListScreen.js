import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  BackHandler,
} from "react-native";
import { formatListData, getData, numColumns } from "../../utils";
import MovieTile from "../../components/movieTile";
import { useNavigation } from "@react-navigation/native";
import BackIcon from "../../assets/images/Back.png";
import HeaderBg from "../../assets/images/nav_bar.png";
import SearchIcon from "../../assets/images/search.png";
import CloseIcon from "../../assets/images/close.png";
import { SearchBar } from "../../components/searchBar";
import { styles } from "./movieListScreen.styles";

export default function MovieList() {
  const [data, setdata] = useState([]); // state assigned to listview
  const [currData, setCurrData] = useState([]); // state used too maintain original data
  const [page, setPage] = useState(0); // state used to maintain page number
  const [showSearch, setShowSearch] = useState(false);
  const navigation = useNavigation();

  // Adding Page as dependency - so whenever page updates it'll fetch next set of data and concat it
  useEffect(() => {
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

  const getNavBar = () => {
    return {
      title: "Romantic Comedy",
      headerTransparent: true,
      headerTitle: (props) => (
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>{props.children}</Text>
        </View>
      ),
      headerLeft: () => {
        return (
          <TouchableOpacity
            onPress={() => navigation.goBack()
              // Alert.alert("Exit App", "Do you want to exit?", [
              //   {
              //     text: "No",
              //     onPress: () => console.log("Cancel Pressed"),
              //     style: "cancel",
              //   },
              //   { text: "Yes", onPress: () => BackHandler.exitApp() },
              // ])
            }
          >
            <Image source={BackIcon} style={styles.backIcon} />
          </TouchableOpacity>
        );
      },
      headerRight: () => {
        return (
          <TouchableOpacity
            onPress={() => {
              if (showSearch) setdata(currData); // whenever search is closed , search results will be replaced with original data
              setShowSearch((currVal) => !currVal);
            }}
          >
            <Image
              source={showSearch ? CloseIcon : SearchIcon}
              style={styles.searchIcon}
            />
          </TouchableOpacity>
        );
      },
    };
  };

  // method filters data from original data list and assigned it to listview data
  const onSearch = (searchKey) => {
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
      <Image source={HeaderBg} style={styles.headerShadow} />
      {showSearch && <SearchBar onSearch={onSearch} />}
      <FlatList
        data={formatListData(data, numColumns)} //formatting list data with empty cells so last row item's design won't be collapsed
        style={styles.listView}
        renderItem={({ item, index }) => MovieTile({ item, index, navigation })} // renders each movie thumbnail
        numColumns={numColumns}
        onEndReached={() => setPage(page + 1)} // whenever list is scrolled to 70%, it'll update pagenumber which inturn call next set of data
        onEndReachedThreshold={0.7} // Lazy load triggers at 70% scroll
      />
    </SafeAreaView>
  );
}
