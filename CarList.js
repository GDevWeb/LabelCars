import React, { useState, useEffect } from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import cars from './cars';
import Filter from './Filter';

export default function CarList(props) {
  const [filteredCars, setFilteredCars] = useState(cars);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    filterCars();
  }, [minPrice, maxPrice]);

  const filterCars = () => {
    const min = parseFloat(minPrice);
    const max = parseFloat(maxPrice);

    if (isNaN(min) && isNaN(max)) {
      setFilteredCars(cars);
    } else if (isNaN(min)) {
      setFilteredCars(cars.filter(car => car.price <= max));
    } else if (isNaN(max)) {
      setFilteredCars(cars.filter(car => car.price >= min));
    } else {
      setFilteredCars(cars.filter(car => car.price >= min && car.price <= max));
    }
  };

  const renderCarList = (item) => {
    return (
      <TouchableOpacity
        style={styles.carItem}
        onPress={() => props.navigation.navigate("CarDetail", { item })}
      >
        <Image style={styles.carImage} source={{ uri: item.image }} />
        <Text style={styles.name}>{item.name}</Text>
        <Text>{item.price}€ par jour</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Filter
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
        filterCars={filterCars}
      />
      <FlatList
        keyExtractor={item => item.id}
        data={filteredCars}
        renderItem={({ item }) => renderCarList(item)}
        numColumns={2}
      />
    </View>
  );
}

const vw = Dimensions.get("screen").width;
const vh = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  name: {
    color: "#000",
    fontSize: 20,
    fontWeight: 'bold',
  },
  carItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 10
  },
  carImage: {
    width: vw / 2,
    height: vh / 5
  }
});
