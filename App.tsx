import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Home from "./Pages/Home";
import AddItem from "./Pages/AddItem";
import Profile from "./Pages/Profile";
import Welcome from "./Pages/Welcome";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ItemDetails from "./Pages/ItemDetails";

const stack = createStackNavigator();

const bottomTab = createBottomTabNavigator();

const BasicHomeScreen = () => {
  return (
    <bottomTab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "All Items") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Add Item") {
            iconName = focused ? "add-circle" : "add-circle-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: { backgroundColor: "#00FFE9" },
      })}
      tabBarOptions={{
        activeTintColor: "#444AC4",
        inactiveTintColor: "#444AC4",
      }}
    >
      <bottomTab.Screen name="All Items" component={Home} />
      <bottomTab.Screen name="Add Item" component={AddItem} />
      <bottomTab.Screen name="Profile" component={Profile} />
    </bottomTab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
        }}
      >
        <stack.Screen name="Welcome" component={Welcome} />
        <stack.Screen name="Login" component={Login} />
        <stack.Screen name="Sign Up" component={Signup} />
        <stack.Screen name="Details" component={ItemDetails} />
        <stack.Screen name="Home" component={BasicHomeScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
