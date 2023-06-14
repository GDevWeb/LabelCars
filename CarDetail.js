import React, { useState } from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'

const CoffeeItem = (props) => {
  const [item, setItem] = useState(props.route.params.item);

  return (
    <View>
      <Image style={styles.carImage} source={{ uri: item.image }} />
      <Text>
        <Image source={require('./assets/icons/engine.png')} style={{ width: 20, height: 20 }} />
        {item.options.transmission ? "Transmission automatique" : "Transmission manuelle"}
        </Text>
      <Text>
        <Image source={require('./assets/icons/doors.png')} style={{ width: 20, height: 20 }} />
        {item.options.person} personnes
      </Text>
      <Text>
        <Image source={require('./assets/icons/compass.png')} style={{ width: 20, height: 20 }} />
        {item.options.transmission ? "GPS intégré" : "GPS non inclus"}
      </Text>
      <Text>
        <Image source={require('./assets/icons/snow.png')} style={{ width: 20, height: 20 }} />
        {item.options.transmission ? "véhicule climatisé" : "véhicule non climatisé"}
      </Text>
        <Text>
        {item.price}€ par jour
        </Text>
    </View>

    
  )
}

export default CoffeeItem

const vw = Dimensions.get("screen").width;
const vh = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  carImage: {
    width: vw,
    height: vh / 4
  },
  footerPrice : {
    fontSize:18,
    position: 'fixed',
    
  }

})