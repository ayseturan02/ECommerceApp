import {StyleSheet, Text, View, Dimensions, Pressable} from 'react-native';
import React from 'react';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

const NowButton = (props) => {
  const {onPress} = props
  
  return (
    <Pressable onPress={onPress}>
      <View
        style={{
          backgroundColor: 'black',
          height: winWidth * 0.1,
          width: winWidth * 0.3,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: winWidth * 0.04,
            margin: winWidth * 0.02,
            marginLeft: winWidth * 0.06,
          }}>
          Shop Now
        </Text>
      </View>
    </Pressable>
  );
};

export default NowButton;

const styles = StyleSheet.create({});
