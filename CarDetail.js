import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

const CoffeeItem = (props) => {
  const [item, setItem] = useState(props.route.params.item);

  return (
    <View style={styles.container}>
      <Image style={styles.carImage} source={{ uri: item.image }} />
      <View style={styles.details}>
        <View style={styles.detail}>
          <Image source={require('./assets/icons/engine.png')} style={styles.icon} />
          <Text style={styles.infoOption}>
            {item.options.transmission ? "Transmission automatique" : "Transmission manuelle"}
          </Text>
        </View>
        <View style={styles.detail}>
          <Image source={require('./assets/icons/doors.png')} style={styles.icon} />
          <Text style={styles.infoOption}>
            {item.options.person} personnes
          </Text>
        </View>
        <View style={styles.detail}>
          <Image source={require('./assets/icons/compass.png')} style={styles.icon} />
          <Text style={styles.infoOption}>
            {item.options.transmission ? "GPS intégré" : "GPS non inclus"}
          </Text>
        </View>
        <View style={styles.detail}>
          <Image source={require('./assets/icons/snow.png')} style={styles.icon} />
          <Text style={styles.infoOption}>
            {item.options.transmission ? "Véhicule climatisé" : "Véhicule non climatisé"}
          </Text>
        </View>
      </View>
      <View style={styles.bottomPrice}>
        <Text style={styles.banPrice}>
          {item.price}€ par jour
        </Text>
      </View>
    </View>
  );
};

export default CoffeeItem;

const vw = Dimensions.get("screen").width;
const vh = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 20,
  },
  carImage: {
    width: vw,
    height: vh / 4,
  },
  details: {
    flex: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  detail: {
    width: '49%',
    marginBottom: 20,
    alignItems: 'center'
  },
  icon: {
    width: 40,
    height: 40,
  },
  infoOption: {
    fontWeight: 'bold',
  },
  bottomPrice: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#2D4F6C',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  banPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
  },
});
