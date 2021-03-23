import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../Screens/Common/Login';
import HomeScreen from '../Screens/Driver/Home';


const HomeStack = createStackNavigator();

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="DashBoard" component={HomeScreen} />
             </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
