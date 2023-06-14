import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import Home from './Home';
import CarList from './CarList';
import CarDetail from './CarDetail';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#222"
        }
      }}>
        <Stack.Screen name="Accueil" component={Home} />
        <Stack.Screen name="CarList" component={CarList} options={{
          title: "Nos véhicules"
        }} />
        <Stack.Screen name="CarDetail" component={CarDetail} options={{
          title: "Détail du véhicule"
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App