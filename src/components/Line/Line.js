import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import styles from './styles';

const AnimatedBars = () => {
  const [currentBarIndex, setCurrentBarIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBarIndex((prevIndex) => (prevIndex + 1) % 5);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const bars = Array.from({ length: 5 }, (_, index) => ({
    index,
    color: index === currentBarIndex ? 'white' : 'gray',
  }));

  return (
    <View style={styles.line_position}>
      {bars.map((bar) => (
        <View key={bar.index} style={[styles.line, { backgroundColor: bar.color }]} />
      ))}
    </View>
  );
};

export default AnimatedBars;
