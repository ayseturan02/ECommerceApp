import {Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {RouterNames} from '../../config';
import {useNavigation} from '@react-navigation/native';
const Stack = createNativeStackNavigator();
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const FlatList5 = props => {
  const navigation = useNavigation();
  const {onPress} = props;
  const {photo, title, price, description} = props;
  return (
    <View style={styles.image_position}>
      <View style={styles.image_view}>
        <View>
          <Image source={{uri: photo}} style={styles.image_size} />
        </View>
      </View>
      <View style={styles.text_position}>
        <TouchableOpacity
          title={title}
          onPress={() =>
            navigation.navigate(RouterNames.PRODUCT, {
              title: title,
              description: description,
              price: price,
              image: photo,
            })
          }>
          <Text style={styles.title_style}>{title}</Text>
        </TouchableOpacity>
        <Text style={styles.price_style}>AED {price}</Text>
      </View>
    </View>
  );
};

export default FlatList5;
