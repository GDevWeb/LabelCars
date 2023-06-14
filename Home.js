import React from 'react';
import { ImageBackground, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default Home = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('CarList');
  };

  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={handlePress}
    >
      <ImageBackground style={styles.header} source={require("./assets/hero.jpg")}>
        <Text style={styles.title}>3 véhicules à découvrir</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}


const vw = Dimensions.get("screen").width;
const vh = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  container : {
    flex: 1,
    borderColor : 'orange'
  }, 

  header : {
    width:vw,
    height : vh / 3,
    backgroundColor : 'blue',
  },
  title : {
    position: 'absolute',
    bottom: 5,
    left: 5,
    color : "white",
    fontSize : 24,
  },


});