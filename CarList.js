import React, { useState } from "react";
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import cars from "./cars";
import Filter from "./Filter";

export default function CarList(props) {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  const handleFilter = (min, max) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  const filteredCars = cars.filter((car) => {
    return (minPrice === 0 || car.price >= minPrice) && (maxPrice === 0 || car.price <= maxPrice);
  });

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

  return (
    <View style={styles.container}>
      <Filter onFilter={handleFilter} />
      {filteredCars.length > 0 ? (
        <FlatList
          keyExtractor={(item) => item.id}
          data={filteredCars}
          renderItem={renderCarList}
          numColumns={1}
        />
      ) : (
        <Text style={styles.noMatchesText}>Aucune correspondance trouvée.</Text>
      )}
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
  noMatchesText: {
    fontStyle: 'italic',
    textAlign: 'center',
  },
});
