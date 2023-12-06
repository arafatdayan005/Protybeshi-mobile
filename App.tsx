import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Pages/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

const stack = createStackNavigator();

const bottomTab = createBottomTabNavigator();

const BasicDashboardScreen = () => {
  return (
    <stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <stack.Screen name="Home Page" component={Home} />
    </stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <bottomTab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <bottomTab.Screen name="Dashboard" component={BasicDashboardScreen} />
        <bottomTab.Screen name="Add Item" component={BasicDashboardScreen} />
        <bottomTab.Screen name="Profile" component={BasicDashboardScreen} />
      </bottomTab.Navigator>
    </NavigationContainer>
  );
};

export default App;
