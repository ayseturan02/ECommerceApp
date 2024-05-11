import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;
import { Hearts } from './../../components/index';
import { useNavigation } from '@react-navigation/native';

const Product = props => {
  const { title, description, image, price, navigation } = props;
  const [expanded, setExpanded] = useState(false);

  return (
    <View>
      <View style={{ alignContent: 'center', alignSelf: 'center' }}>
        <View style={styles.image_position}>
          <View style={styles.image}>
            <Image source={{ uri: image }} style={styles.image_size} />
          </View>
        </View>
      </View>
      <View style={styles.heart_position}>
        <Hearts />
      </View>
      <View style={styles.title_position}>
        <View style={styles.title_size}>
          <View>
            <Text style={{ color: 'white', fontSize: winWidth * 0.04 }}>
              {title}
            </Text>
          </View>
          <View style={{ left: winWidth * 0.03 }}>
            <Text style={{ color: '#297E51', fontSize: winWidth * 0.03 }}>
              On Sale
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              color: 'white',
              fontSize: winWidth * 0.07,
              fontWeight: '500',
            }}>
            {title}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View>
            <Text style={{ color: '#7ACFD9', fontSize: winWidth * 0.04 }}>
              AED 2400
            </Text>
          </View>
          <View style={{ left: winWidth * 0.03 }}>
            <Text style={{ color: '#B8B9B9', fontSize: winWidth * 0.03 }}>
              {price}
            </Text>
          </View>
        </View>
        <View>
          <Text style={{ color: 'white', fontSize: winWidth * 0.03 }}>
            {expanded ? description : `${description.slice(0, 100)}... `}
            {!expanded && (
              <TouchableOpacity onPress={() => setExpanded(true)}>
                <Text style={{ color: '#297E51', fontSize: winWidth * 0.03 }}>
                  Daha fazla göster
                </Text>
              </TouchableOpacity>
            )}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Product;
