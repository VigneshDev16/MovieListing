import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MovieList from "../screens/movieList/movieListScreen";
import loginScreen from "../screens/login/loginScreen";
import MovieDetails from "../screens/movieDetail/movieDetailScreen";
import registerScreen from "../screens/register/registerScreen";

const Stack = createNativeStackNavigator();

export default navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={loginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={registerScreen}
        />
        <Stack.Screen name="MovieList" component={MovieList} />
        <Stack.Screen
          name="MovieDetails"
          component={MovieDetails}
          options={({ route }) => ({
            headerBackTitleVisible: false,
            headerTitle: "",
            headerTransparent: true,
            headerTintColor: "#fff",
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
