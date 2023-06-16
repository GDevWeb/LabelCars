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
        <View style={styles.carText}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{item.price}€ par jour</Text>
        </View>
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
    flex: 1,
    flexDirection : 'row',
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 10,
    backgroundColor : '#F2F2F2',
    borderRadius : 20,
    marginBottom : 10,
  },
  carImage: {
    flex: 2,
    width: vw,
    height: vh / 6,
  },
  carText : {
    flex : 2,
    justifyContent:'center',
    alignItems: 'center',
    textAlign : 'center',
  },
  item : {
    fontSize : '12',
  },

  noMatchesText: {
    fontStyle: 'italic',
    fontWeight : 'bold',
    textAlign: 'center',
    color: 'crimson',
  },
});
