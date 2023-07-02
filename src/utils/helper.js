import { Dimensions, Platform } from "react-native";

export const numColumns = 3;

export const DeviceWidth = Dimensions.get("window").width;
export const DeviceHeight = Dimensions.get("window").height;

export const ios = Platform.OS == "ios";

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
