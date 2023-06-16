import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Switch, TouchableOpacity, Animated } from 'react-native';

const Filter = ({ onFilter }) => {
  const [minPrice, setMinPrice] = useState('0');
  const [maxPrice, setMaxPrice] = useState('0');
  const [transmission, setTransmission] = useState(false);
  const [climatisation, setClimatisation] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [animation] = useState(new Animated.Value(0));
  const [arrowDirection, setArrowDirection] = useState('↑');

  useEffect(() => {
    const min = parseInt(minPrice);
    const max = parseInt(maxPrice);
    onFilter(min, max, transmission, climatisation);
  }, [minPrice, maxPrice, transmission, climatisation, onFilter]);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);

    Animated.timing(animation, {
      toValue: isExpanded ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();

    setArrowDirection(isExpanded ? '↑' : '↓');
  };

  const height = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 160], 
  });

  return (
    <View style={styles.filterContainer}>
      <TouchableOpacity onPress={toggleAccordion}>
        <View style={styles.accordionHeader}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Filtres</Text>
          <Text style={styles.arrowDirection}>{arrowDirection}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <Animated.View style={[styles.accordionContent, { height }]}>
        <View style={styles.minMax}>
          <Text>Prix</Text>
          <TextInput
            style={styles.input}
            value={minPrice}
            onChangeText={(number) => setMinPrice(number)}
            keyboardType="numeric"
          />
          <Text> - </Text>
          <TextInput
            style={styles.input}
            value={maxPrice}
            onChangeText={(number) => setMaxPrice(number)}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.switchContainer}>
          <Text>Boîte automatique</Text>
          <Switch
            value={transmission}
            onValueChange={(value) => setTransmission(value)}
          />
          <Text>Climatisation</Text>
          <Switch
            value={climatisation}
            onValueChange={(value) => setClimatisation(value)}
          />
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    padding: 10,
    backgroundColor: '#eee',
  },
  accordionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerContainer: {
    flex: 1, 
    flexDirection: 'row-reverse',
    alignItems: 'flex-end', 
  },
  arrowDirection:{
    fontSize : 24,
    fontWeight : 'bold'
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  accordionContent: {
    overflow: 'hidden',
  },
  minMax: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    flexBasis: 100,
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#2D4F6C',
    textAlign: 'center',
  },
  switchContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default Filter;
