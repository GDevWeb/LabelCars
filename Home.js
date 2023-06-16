import React from "react";
import {
  ImageBackground,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import cars from "./cars";
import { FlatList } from "react-native-gesture-handler";

const Home = (props) => {
  const navigation = useNavigation();

  const sortedCars = cars.sort((a, b) => b.reservations - a.reservations);
  const data = sortedCars.slice(0, 4);

  const handlePress = () => {
    navigation.navigate("CarList");
  };

  const renderCarlist = (item) => {
    return (
      <TouchableOpacity
        style={styles.carItem}
        onPress={() => props.navigation.navigate("CarDetail", { item })}
      >
        <View style={styles.cardItem}>
        <Image style={styles.carImage} source={{ uri: item.image }} />
        <Text style={styles.name}>{item.name}</Text>
        <Text style = {styles.price}>{item.price}€ par jour</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <ImageBackground
        style={styles.header}
        source={require("./assets/hero.jpg")}
      >
        <Text style={styles.title}>{cars.length} véhicules à découvrir</Text>
      </ImageBackground>
      <View style={styles.container}>
        <Text style={styles.subtitle}>Les plus réservés</Text>
        <FlatList
          keyExtractor={(item) => item.id}
          data={data}
          renderItem={({ item }) => renderCarlist(item)}
          numColumns={2}
        />
      </View>
    </TouchableOpacity>
  );
};

const vw = Dimensions.get("screen").width;
const vh = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "orange",
  },
  header: {
    width: vw,
    height: vh / 3,
    backgroundColor: "blue",
  },
  title: {
    position: "absolute",
    bottom: 5,
    left: 5,
    color: "white",
    fontSize: 24,
  },
  subtitle : {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    color:"#536D85"
  },
  name: {
    color: "#000",
    fontWeight : 'bold',
    fontSize: 16,
  },

  price:{
    fontWeight : 'bold',
  },
  carItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    padding: 10,
  },
  cardItem:{
    flexBasis:"45%",
    display: "flex",
    justifyContent: "center",
    alignItems : "center",
    width: 190,
    height : 170,
    backgroundColor: "#E9E9E9",
    borderRadius:10,

  },
  carImage: {
    width: vw / 2,
    height: vh / 8,
  },
});

export default Home;
