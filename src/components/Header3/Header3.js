import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;
import React from 'react';
import styles from './styles';
import {back, search, shoppingCart} from './../../assets/icons/index';
import {RouterNames} from '../../config';
import {useNavigation} from '@react-navigation/native';

const Header3 = props => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.view}>
        <View style={styles.position}>
          <TouchableOpacity
            style={{justifyContent: 'flex-start', width: winWidth * 0.1}}
            onPress={() => navigation.goBack(RouterNames.PRODUCTS)}>
            <Image
              source={back}
              style={{width: winWidth * 0.05, height: winWidth * 0.05}}
            />
          </TouchableOpacity>
          <View style={{width: winWidth * 0.7, alignItems: 'center'}}>
            <Text
              style={{
                fontSize: winWidth * 0.06,
                fontWeight: '600',
                color: 'white',
              }}>
              Product Details
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Image
              source={search}
              style={{width: winWidth * 0.05, height: winWidth * 0.05}}
            />

            <Image
              source={shoppingCart}
              style={{height: winWidth * 0.05, width: winWidth * 0.05}}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header3;
