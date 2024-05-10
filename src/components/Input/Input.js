import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import React from 'react';
import styles from './styles';

const Input = props => {
  const {icon,placeholder} = props;
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        style={styles.input}>
        <Image source={icon} style={styles.search_size} />
      </TextInput>
    </View>
  );
};

export default Input;
