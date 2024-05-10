import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Line = () => {
  return (
    <View style={styles.line_position}>
      <View style={styles.line}></View>
      <View style={styles.line}></View>
      <View style={styles.line}></View>
      <View style={styles.line}></View>
      <View style={styles.line}></View>
    </View>
  );
};

export default Line;
