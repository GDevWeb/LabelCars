// Filter.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Filter = ({ onFilter }) => {
  const [minPrice, setMinPrice] = useState('0');
  const [maxPrice, setMaxPrice] = useState('0');

  const handleFilter = () => {
    const min = parseInt(minPrice);
    const max = parseInt(maxPrice);
    onFilter(min, max);
  };

  return (
    <View style={styles.filterContainer}>
      <Text>Prix minimum :</Text>
      <TextInput
        style={styles.input}
        value={minPrice}
        onChangeText={(number) => setMinPrice(number)}
        keyboardType="numeric"
      />
      <Text>Prix maximum :</Text>
      <TextInput
        style={styles.input}
        value={maxPrice}
        onChangeText={(number) => setMaxPrice(number)}
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
