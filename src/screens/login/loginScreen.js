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
import { TextInput } from "@react-native-material/core";
import { StatusBar } from "expo-status-bar";

export default LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      <ImageBackground
        source={LoginBg}
        style={{ flex: 1, justifyContent: "center" }}
        resizeMode="cover"
      >
        <View
          style={{
            width: DeviceWidth * 0.9,
            height: DeviceHeight * 0.6,
            borderRadius: 20,
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "black",
            opacity: 0.8,
          }}
        >
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text style={{ color: "red", fontSize: 50, fontFamily: "bold" }}>
              Movies
            </Text>
          </View>
          <View style={{ flex: 2, width: "100%", padding: 20 }}>
            <TextInput
              style={{ color: "black", paddingTop: 10, fontSize: 25 }}
              label="Email"
              inputStyle={{ fontSize: 20 }}
            ></TextInput>
            <TextInput
              style={{ color: "black", paddingTop: 10, fontSize: 20 }}
              label="Password"
              inputStyle={{ fontSize: 20 }}
            ></TextInput>

            <TouchableOpacity
              onPress={() => navigation.navigate("MovieList")}
              style={{
                justifyContent: "center",
                borderRadius: 10,
                backgroundColor: "grey",
                marginTop: 30,
              }}
            >
              <Text
                style={{
                  color: "white",
                  alignSelf: "center",
                  // backgroundColor: "grey",
                  padding: 10,
                  fontSize: 25,
                  fontFamily: "semiBold",
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
            <Text style={{ color: "white", fontSize: 20, padding: 10 }}>
              New User? <Text style={{ color: "cyan" }}>Register</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
