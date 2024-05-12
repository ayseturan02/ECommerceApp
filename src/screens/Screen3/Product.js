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
import {
  Header3,
  ModalComp,
  Counter,
  Button3,
  Product1,
  Color1,
} from './../../components/index';
import {useState} from 'react';
import styles from './styles';

const Product = ({route, navigation}) => {
  const {title, description, image, price} = route.params;
  const info ={
      image:image,
      title:title,
      description:description,
      price:price
  };

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={{backgroundColor: '#191919', height: winHeight}}>
      <Header3 />
      <Product1 {...route.params} navigation={navigation} />
      <Color1 />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: winWidth * 0.9,
          alignSelf: 'center',
          alignContent: 'center',
        }}>
        <Counter />
        <Button3 onPressFunc={() => setModalVisible(!modalVisible)}/>

        <ModalComp
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          info={info}
        />
      </View>
    </SafeAreaView>
  );
};

export default Product;
