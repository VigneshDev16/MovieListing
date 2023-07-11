import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MovieList from '../screens/movieList/movieListScreen'
import loginScreen from "../screens/login/loginScreen";

const Stack = createNativeStackNavigator();



export default navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={loginScreen} options={{headerShown:false}}/>

        <Stack.Screen name="MovieList" component={MovieList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
