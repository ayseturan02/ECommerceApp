import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import styles from './styles';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;
import {useState} from 'react';
import {minusSign, add} from './../../assets/icons/index';

const Counter = () => {
  const [productCount, setProductCount] = useState(0);

  const addToCart = () => {
    // Sepete ürün ekleme işlemi
    setProductCount(productCount + 1);
  };

  const increaseQuantity = () => {
    // Ürün sayısını artırma işlemi
    setProductCount(productCount + 1);
  };

  const decreaseQuantity = () => {
    // Ürün sayısını azaltma işlemi
    if (productCount > 0) {
      setProductCount(productCount - 1);
    }
  };
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity
        style={styles.minusSign_position}
        onPress={decreaseQuantity}>
        <View style={styles.minusSign_size}>
          <Image
            source={minusSign}
            style={{width: winWidth * 0.05, height: winWidth * 0.05}}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.counter}>
        <Text style={styles.counter_style}>{productCount}</Text>
      </View>
      <TouchableOpacity style={styles.add} onPress={increaseQuantity}>
        <View style={styles.add_position}>
          <Image source={add} style={styles.add_size} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;
