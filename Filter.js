import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Filter = ({ filterCars }) => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleFilter = () => {
    const min = parseFloat(minPrice);
    const max = parseFloat(maxPrice);
    filterCars(min, max);
  };

  return (
    <View style={styles.filterContainer}>
      <Text>Prix minimum :</Text>
      <TextInput
        style={styles.input}
        value={minPrice}
        onChangeText={text => setMinPrice(text)}
        keyboardType="numeric"
      />
      <Text>Prix maximum :</Text>
      <TextInput
        style={styles.input}
        value={maxPrice}
        onChangeText={text => setMaxPrice(text)}
        keyboardType="numeric"
      />
      <Button title="Filtrer" onPress={handleFilter} />
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    padding: 10,
    backgroundColor: '#eee',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default Filter;
