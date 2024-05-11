import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    TouchableOpacity,
  } from 'react-native';
  import React from 'react';
  const winWidth = Dimensions.get('window').width;
  const winHeight = Dimensions.get('window').height;
  import {RouterNames} from '../../config';
  import {useNavigation} from '@react-navigation/native';
  import {Line, Header3, FlatList0, Button3} from './../../components/index';
  import {logo} from './../../assets/images/index';
  import {heart} from './../../assets/icons/index';
  
  import {useState} from 'react';
  import ModalComp from '../../components/ModalComp/ModalComp';
  
  const Product = props => {
    const [liked, setLiked] = useState(false);
    const [selectedText, setSelectedText] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
  
    const handlePress = text => {
      setLiked(!liked);
      setSelectedText(text);
    };
  
    return (
      <SafeAreaView style={{backgroundColor: '#191919', height: winHeight}}>
        <View>
          <Header3 />
          <FlatList0 />
  
          
          <TouchableOpacity
            style={{
              height: winWidth * 0.13,
              width: winWidth * 0.35,
              backgroundColor: 'white',
              borderRadius: winWidth * 0.07,
            }}
            onPress={() => setModalVisible(!modalVisible)}></TouchableOpacity>
  
          <ModalComp modalVisible={modalVisible} />
        </View>
      </SafeAreaView>
    );
  };
  
  export default Product;
  
  const styles = StyleSheet.create({});
  