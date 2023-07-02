import { Dimensions, Image, View } from "react-native";

export const numColumns = 3;

export const DeviceWidth = Dimensions.get("window").width
export const DeviceHeight = Dimensions.get("window").height

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

// export const getMovieScreenNavBar =()=>{
//    return  {
//         title: "Romantic Comedy",
//         headerStyle: {
//           backgroundColor: "black",
//         },
//         headerBackground: () => {
//           return (
//             <Image
//               source={HeaderBg}
//               // style={{ resizeMode: "contain", height: 30, width: 20 }}
//             />
//           );
//         },
//         headerTitleAlign: "left",
//         headerTitle: (props) => (
//           <View style={{ flex: 1, flexDirection: "row", paddingLeft: 10 }}>
//             <Text
//               style={{
//                 color: "white",
//                 fontFamily: "light",
//                 fontSize: 25,
//               }}
//             >
//               {props.children}
//             </Text>
//           </View>
//         ),
//         headerLeft: () => {
//           return (
//             <Image
//               source={BackIcon}
//               style={{ resizeMode: "contain", height: 30, width: 20 }}
//             />
//           );
//         },
//       }
// }