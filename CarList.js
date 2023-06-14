import React from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import cars from './cars';

export default function CarList(props) {
    const data = cars.slice(0, 3);

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
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={item => item.id}
                data={data}
                renderItem={({ item }) => renderCarList(item)}
                numColumns={0}
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
    header: {
        width: vw,
        height: vh / 3
    },
    name: {
        color: "#000",
        fontSize: 20,
        fontWeight: 'bold',
    },
    carItem: {
        display: 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        flex: 1,
        padding: 10
    },
    carImage: {
        width: vw,
        height: vh/5
    }
});
