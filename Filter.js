// Filter.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Switch } from 'react-native';

const Filter = ({ onFilter }) => {
  const [minPrice, setMinPrice] = useState('0');
  const [maxPrice, setMaxPrice] = useState('0');
  const [transmission, setTransmission] = useState(false);
  const [climatisation, setClimatisation] = useState(false);

  useEffect(() => {
    handleFilter();
  }, [minPrice, maxPrice, transmission, climatisation]);

  const handleFilter = () => {
    const min = parseInt(minPrice);
    const max = parseInt(maxPrice);
    onFilter(min, max, transmission, climatisation);
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
      <View style={styles.switchContainer}>
        <Text>Boîte automatqiue:</Text>
        <Switch
          value={transmission}
          onValueChange={(value) => setTransmission(value)}
        />
      </View>
      <View style={styles.switchContainer}>
        <Text>Climatisation :</Text>
        <Switch
          value={climatisation}
          onValueChange={(value) => setClimatisation(value)}
        />
      </View>
      {/* <Button title="Filtrer" onPress={handleFilter} /> */}
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
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default Filter;
