import {StyleSheet, Dimensions, TouchableOpacity, Text} from 'react-native';
import React, {useState} from 'react';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

const Button3 = props => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <TouchableOpacity
      style={{
        height: winWidth * 0.13,
        width: winWidth * 0.35,
        backgroundColor: 'white',
        borderRadius: winWidth * 0.07,
      }}
      onPress={() => setModalVisible(!modalVisible)}>
      <Text
        style={{
          alignSelf: 'center',
          color: 'black',
          fontSize: winWidth * 0.05,
          fontWeight: '600',
          top: winWidth * 0.023,
        }}>
        Add to Cart
      </Text>
    </TouchableOpacity>
  );
};

export default Button3;

const styles = StyleSheet.create({});
