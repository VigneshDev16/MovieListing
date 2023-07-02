import { Dimensions, Platform } from "react-native";

export const numColumns = 3; // Number of columns to be rendered in the listview

export const DeviceWidth = Dimensions.get("window").width;
export const DeviceHeight = Dimensions.get("window").height;

export const ios = Platform.OS == "ios";

//formatting list data with empty cells so last row item's design won't be collapsed
export const formatListData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};
