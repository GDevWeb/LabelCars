import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Home from './Home';
import CarList from './CarList';
import CarDetail from './CarDetail';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo-transparent.png')} style={styles.logo} />
      <NavigationContainer>
        <StatusBar style="light" />
        <Stack.Navigator screenOptions={{
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#2D4F6C',
          },
          headerTitleAlign : 'center',
        }}>
          
          <Stack.Screen name="Accueil" component={Home} />
          <Stack.Screen
            name="CarList"
            component={CarList}
            options={{
              headerBackTitle : 'Accueil',
              title: 'Nos véhicules',
            }}
          />
          <Stack.Screen
            name="CarDetail"
            component={CarDetail}
            options={{
              title: 'Détail du véhicule',
            }
          }
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D4F6C',
    paddingTop: Platform.OS === 'android' ? 0 : Constants.statusBarHeight,
  },
  logo: {
    alignSelf:'center',
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
});

export default App;
