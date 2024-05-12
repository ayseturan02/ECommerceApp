import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import NowButton from '../NowButton/NowButton';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;
import styles from './styles';
import {RouterNames} from '../../config';

const FlatList1 = props => {
  const navigation = useState;
  const {photo, price, title} = props;
  return (
    <View>
      <View style={{marginHorizontal: winWidth * 0.04}}>
        <View style={styles.view}>
          <View style={styles.position}>
            <View style={{flexDirection: 'row'}}>
              <View style={{width: winWidth * 0.5}}>
                <Text style={styles.text_style}>{title}</Text>
              </View>
              <View style={{alignItems: 'flex-end', width: winWidth * 0.3}}>
                <View style={styles.yüzde_view}>
                  <View style={styles.yüzde_position}>
                    <Text style={{fontSize: winWidth * 0.05, color: 'white'}}>
                      15%
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View>
              <Text style={styles.price}>AED {price}</Text>
            </View>
            <View>
              <NowButton
                title="Sign In"
                onPress={() => navigation.navigate(RouterNames.MENU)}
              />
            </View>
          </View>
          <View style={styles.image}>
            <Image
              source={{uri: photo}}
              style={{width: winWidth * 0.3, height: winWidth * 0.3}}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default FlatList1;
