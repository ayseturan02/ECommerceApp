import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;
import {ProductsFlatLİst} from './../../components/index';
import {back} from '../../assets/icons/index';
import styles from './styles';
import {RouterNames} from '../../config';
import {useNavigation} from '@react-navigation/native';

const Products = props => {
  
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{backgroundColor: '#191919', height: winHeight}}>
      <View style={{flexDirection: 'row', margin: winWidth * 0.05}}>
        <TouchableOpacity
          onPress={() => navigation.goBack(RouterNames.HOMEPAGE)}>
          <Image
            source={back}
            style={{height: winWidth * 0.07, width: winWidth * 0.07}}
          />
        </TouchableOpacity>
        <View
          style={{
            alignContent: 'center',
            alignItems: 'center',
            width: winWidth * 0.7,
          }}>
          <Text style={styles.text}>PRODUCTS</Text>
        </View>
      </View>
      <ProductsFlatLİst />
    </SafeAreaView>
  );
};

export default Products;
