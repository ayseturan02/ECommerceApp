import {
  View,
  Dimensions,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
  Button,
} from 'react-native';
import React from 'react';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;
import {RouterNames} from '../../config';
import {useNavigation} from '@react-navigation/native';
import {Header3, ModalComp, Button3} from './../../components/index';
import {logo} from './../../assets/images/index';
import {heart, minusSign, add} from './../../assets/icons/index';
import {useState} from 'react';

const Product = ({route, navigation}) => {
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

  const [liked, setLiked] = useState(false);
  const [selectedText, setSelectedText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = text => {
    setLiked(!liked);
    setSelectedText(text);
  };
  const {title, description, image, price} = route.params;

  return (
    <SafeAreaView style={{backgroundColor: '#191919', height: winHeight}}>
      <Header3 />
      <View style={{alignContent: 'center', alignSelf: 'center'}}>
        <View
          style={{
            height: winHeight * 0.4,
            width: winWidth * 0.9,
            borderRadius: winWidth * 0.05,
            backgroundColor: 'white',
          }}>
          <View
            style={{
              alignContent: 'center',
              justifyContent: 'center',
              padding: winWidth * 0.15,
            }}>
            <Image
              source={{uri: image}}
              style={{
                height: winWidth * 0.6,
                width: winWidth * 0.6,
                borderRadius: winWidth * 0.05,
              }}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          width: winWidth * 0.9,
          alignItems: 'flex-end',
          alignContent: 'center',
          margin: winWidth * 0.03,
        }}>
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
      <View
        style={{
          height: winHeight * 0.2,
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
              {title}
            </Text>
          </View>
          <View style={{left: winWidth * 0.03}}>
            <Text style={{color: '#297E51', fontSize: winWidth * 0.03}}>
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
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View>
            <Text style={{color: '#7ACFD9', fontSize: winWidth * 0.04}}>
              AED 2400
            </Text>
          </View>
          <View style={{left: winWidth * 0.03}}>
            <Text style={{color: '#B8B9B9', fontSize: winWidth * 0.03}}>
              {price}
            </Text>
          </View>
        </View>
        <View>
          <Text style={{color: 'white', fontSize: winWidth * 0.03}}>
            {description}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: winWidth * 0.6,
          justifyContent: 'space-between',
          marginLeft: winWidth * 0.04,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: winWidth * 0.04,
            fontWeight: '500',
          }}>
          Size
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: winWidth * 0.04,
            textDecorationLine: 'underline',
          }}>
          US
        </Text>
        <Text
          style={{color: 'white', fontSize: winWidth * 0.04}}
          onPress={() => handlePress('EU')}>
          EU
        </Text>
        <Text
          style={{color: 'white', fontSize: winWidth * 0.04}}
          onPress={() => handlePress('UK')}>
          UK
        </Text>
        <Text style={{color: 'white', fontSize: winWidth * 0.04}}>Color</Text>
      </View>

      <View>
        <View style={{flexDirection: 'row', margin: winWidth * 0.05}}>
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
                7
              </Text>
            </View>
          </View>
          <View
            style={{
              height: winWidth * 0.1,
              width: winWidth * 0.1,
              borderRadius: winWidth * 0.1,
              backgroundColor: '#6DC7FB',
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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: winWidth * 0.9,
            alignSelf: 'center',
            alignContent: 'center',
          }}>
          <View style={{flexDirection: 'row'}}>
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
                  style={{width: winWidth * 0.05, height: winWidth * 0.05}}
                />
              </View>
            </TouchableOpacity>
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
                  style={{width: winWidth * 0.05, height: winWidth * 0.05}}
                />
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              height: winWidth * 0.13,
              width: winWidth * 0.35,
              backgroundColor: 'white',
              borderRadius: winWidth * 0.07,
            }}
            onPress={() => setModalVisible(!modalVisible)}
            >
            <Text
              style={{
                alignSelf: 'center',
                color: 'black',
                fontSize: winWidth * 0.05,
                fontWeight: '600',
                top: winWidth * 0.023,
              }}>
              Add to Cart
            </Text>
          </TouchableOpacity>
        </View>

        <ModalComp modalVisible={modalVisible}  setModalVisible={setModalVisible} />
      </View>
    </SafeAreaView>
  );
};

export default Product;
