import {StyleSheet, Text, View,Dimensions,Image} from 'react-native';
import React from 'react';
import styles from './styles';

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

const Color1 = () => {
  return (
    <View>
      <View
        style={styles.view1}>
        <Text
          style={styles.size_style}>
          Size
        </Text>
        <Text
          style={styles.us_size}>
          US
        </Text>
        <Text
          style={styles.text_style}
          onPress={() => handlePress('EU')}>
          EU
        </Text>
        <Text
          style={styles.text_style}
          onPress={() => handlePress('UK')}>
          UK
        </Text>
        <Text style={styles.text_style}>Color</Text>
      </View>

      <View style={{flexDirection: 'row', margin: winWidth * 0.05}}>
        <View
          style={styles.view_style}>
          <View
            style={styles.view}>
            <Text
              style={styles.number}>
              7
            </Text>
          </View>
        </View>
        <View
          style={styles.blue_view}>
          <View
            style={styles.view_position}>
            <Text
              style={{
                color: 'white',
                fontWeight: '500',
                fontSize: winWidth * 0.04,
              }}>
              8
            </Text>
          </View>
        </View>
        <View
          style={{
            height: winWidth * 0.1,
            width: winWidth * 0.1,
            borderRadius: winWidth * 0.1,
            backgroundColor: '#5B5B5B',
          }}>
          <View
            style={{
              alignItems: 'center',
              height: winWidth * 0.1,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: '500',
                fontSize: winWidth * 0.04,
              }}>
              9
            </Text>
          </View>
        </View>
        <View style={{marginLeft: winWidth * 0.1, flexDirection: 'row'}}>
          <View
            style={{
              backgroundColor: 'white',
              height: winWidth * 0.1,
              width: winWidth * 0.05,
              borderTopLeftRadius: winWidth * 1,
              borderBottomLeftRadius: winWidth * 1,
              borderColor: '#6DC7FB',
              borderWidth: winWidth * 0.003,
            }}></View>
          <View
            style={{
              backgroundColor: 'black',
              height: winWidth * 0.1,
              width: winWidth * 0.05,
              borderTopRightRadius: winWidth * 1,
              borderBottomRightRadius: winWidth * 1,
              borderColor: '#6DC7FB',
              borderWidth: winWidth * 0.003,
            }}></View>
          <View
            style={{
              backgroundColor: '#1146B0',
              height: winWidth * 0.1,
              width: winWidth * 0.05,
              borderTopLeftRadius: winWidth * 1,
              borderBottomLeftRadius: winWidth * 1,
              borderColor: 'white',
              borderWidth: winWidth * 0.003,
            }}></View>
          <View
            style={{
              backgroundColor: '#5B5B5B',
              height: winWidth * 0.1,
              width: winWidth * 0.05,
              borderTopRightRadius: winWidth * 1,
              borderBottomRightRadius: winWidth * 1,
              borderColor: 'white',
              borderWidth: winWidth * 0.003,
            }}></View>
          <View
            style={{
              backgroundColor: '#C50F10',
              height: winWidth * 0.1,
              width: winWidth * 0.05,
              borderTopLeftRadius: winWidth * 1,
              borderBottomLeftRadius: winWidth * 1,
              borderColor: 'white',
              borderWidth: winWidth * 0.003,
            }}></View>
          <View
            style={{
              backgroundColor: '#E75E06',
              height: winWidth * 0.1,
              width: winWidth * 0.05,
              borderTopRightRadius: winWidth * 1,
              borderBottomRightRadius: winWidth * 1,
              borderColor: 'white',
              borderWidth: winWidth * 0.003,
            }}></View>
        </View>
      </View>
    </View>
  );
};

export default Color1;

