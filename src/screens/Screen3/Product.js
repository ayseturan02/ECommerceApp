import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;
import {RouterNames} from '../../config';
import {useNavigation} from '@react-navigation/native';
import {Line, Header3, FlatList0} from './../../components/index';
import {logo} from './../../assets/images/index';
import {heart} from './../../assets/icons/index';

import {useState} from 'react';

const Product = props => {
  const [liked, setLiked] = useState(false);

  const handlePress = () => {
    setLiked(!liked);
  };
  return (
    <SafeAreaView style={{backgroundColor: '#191919', height: winHeight}}>
      <View>
        <Header3 />
        <FlatList0 />

        <View
          style={{
            height: winHeight * 0.1,
            width: winWidth * 0.9,
            alignContent: 'center',
            alignSelf: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingTop: winWidth * 0.03,
            }}>
            <View>
              <Text style={{color: 'white', fontSize: winWidth * 0.04}}>
                Nike Store
              </Text>
            </View>
            <View style={{left: winWidth * 0.03}}>
              <Text style={{color: '#297E51', fontSize: winWidth * 0.03}}>
                On Sale
              </Text>
            </View>
            <View style={{alignItems: 'flex-end', width: winWidth * 0.6}}>
              <TouchableOpacity onPress={handlePress}>
                <Image
                  source={heart}
                  style={{
                    height: winWidth * 0.07,
                    width: winWidth * 0.07,
                    tintColor: liked ? 'red' : 'white',
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text
              style={{
                color: 'white',
                fontSize: winWidth * 0.07,
                fontWeight: '500',
              }}>
              Jordan Jumpman Pro
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View>
              <Text style={{color: '#7ACFD9', fontSize: winWidth * 0.04}}>
                AED 2400
              </Text>
            </View>
            <View style={{left: winWidth * 0.03}}>
              <Text style={{color: '#B8B9B9', fontSize: winWidth * 0.03}}>
                Was AED 2760
              </Text>
            </View>
          </View>
          <View>
            <Text style={{color: 'white', fontSize: winWidth * 0.03}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </Text>
          </View>
        </View>
        <View>
          <Text>Size</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Product;

const styles = StyleSheet.create({});
