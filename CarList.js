// CarList.js
import React, { useState } from "react";
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import cars from "./cars";
import Filter from "./Filter";

export default function CarList(props) {
  const [filteredCars, setFilteredCars] = useState(cars);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  const renderCarList = ({ item }) => {
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

  const handleFilter = (min, max) => {
    setMinPrice(min);
    setMaxPrice(max);
    const filtered = cars.filter((car) => {
      return (min === 0 || car.price >= min) && (max === 0 || car.price <= max);
    });
    setFilteredCars(filtered);
  };

  return (
    <View style={styles.container}>
      <Filter onFilter={handleFilter} />
      <FlatList
        keyExtractor={(item) => item.id}
        data={filteredCars}
        renderItem={renderCarList}
        numColumns={1}
      />
    </View>
  );
}

const vw = Dimensions.get("screen").width;
const vh = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    width: vw,
    height: vh / 3,
  },
  name: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
  },
  carItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    padding: 10,
  },
  carImage: {
    width: vw,
    height: vh / 4,
  },
});
