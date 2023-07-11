import React from "react";
import {
  Button,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import LoginBg from "../../assets/images/splashScreen.png";
import { DeviceHeight, DeviceWidth } from "../../utils";
import { useNavigation } from "@react-navigation/native";

export default LoginScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={LoginBg}
        style={{ flex: 1, justifyContent: "center" }}
        resizeMode="cover"
      >
        <View
          style={{
            width: DeviceWidth * 0.85,
            height: DeviceHeight * 0.7,
            borderRadius:20,
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "black",
            opacity: 0.8,
          }}
        >
            
          <TouchableOpacity
          onPress={()=>navigation.navigate('MovieList')}
            style={{ justifyContent: "center", borderRadius: 10, backgroundColor:'grey'}}
          >
            <Text
              style={{
                color: "white",
                alignSelf: "center",
                // backgroundColor: "grey",
                padding: 10,
                fontSize: 20,
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
