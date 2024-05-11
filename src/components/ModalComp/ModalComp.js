import {
  StyleSheet,
  Text,
  View,
  Modal,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './styles';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;
import {useState} from 'react';
import {logo} from './../../assets/images/index';
import {heart, minusSign, add} from './../../assets/icons/index';

const ModalComp = props => {
  const {navigation, route} = props;

  const {modalVisible, setModalVisible} = props;
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
  const {title} = props;
  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
      transparent={true}
      onRequestClose={() => setModalVisible(false)}>
      <View style={{justifyContent: 'flex-end', height: winHeight * 1}}>
        <View
          style={{
            backgroundColor: 'white',
            height: winHeight * 0.3,
            width: winWidth * 1,
            borderTopLeftRadius: winWidth * 0.1,
            borderTopRightRadius: winWidth * 0.1,
          }}>
          <View style={{margin: winWidth * 0.07, flexDirection: 'row'}}>
            <Image
              source={logo}
              style={{height: winWidth * 0.2, width: winWidth * 0.2}}
            />
            <Text>sjfsjfjsk</Text>

            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                alignContent: 'flex-end',
                width: winWidth * 0.8,
              }}>
              <Text></Text>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <View>
                  <TouchableOpacity
                    style={{
                      backgroundColor: 'white',
                      height: winWidth * 0.1,
                      width: winWidth * 0.1,
                      borderBottomLeftRadius: winWidth * 0.1,
                      borderTopLeftRadius: winWidth * 0.1,
                      borderColor: 'white',
                      borderWidth: winWidth * 0.002,
                    }}
                    onPress={decreaseQuantity}>
                    <View
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: winWidth * 0.1,
                      }}>
                      <Image
                        source={minusSign}
                        style={{
                          width: winWidth * 0.05,
                          height: winWidth * 0.05,
                        }}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
                <View>
                  <View
                    style={{
                      backgroundColor: 'black',
                      height: winWidth * 0.1,
                      width: winWidth * 0.1,
                      borderColor: 'white',
                      borderWidth: winWidth * 0.002,
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        textAlign: 'center',
                        fontSize: winWidth * 0.06,
                      }}>
                      {productCount}
                    </Text>
                  </View>
                </View>
                <View>
                  <TouchableOpacity
                    style={{
                      backgroundColor: 'white',
                      height: winWidth * 0.1,
                      width: winWidth * 0.1,
                      borderBottomRightRadius: winWidth * 0.1,
                      borderTopRightRadius: winWidth * 0.1,
                      borderColor: 'white',
                      borderWidth: winWidth * 0.002,
                    }}
                    onPress={increaseQuantity}>
                    <View
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: winWidth * 0.1,
                      }}>
                      <Image
                        source={add}
                        style={{
                          width: winWidth * 0.05,
                          height: winWidth * 0.05,
                        }}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalComp;
