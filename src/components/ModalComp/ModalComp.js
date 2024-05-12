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
import Counter from '../Counter/Counter';

const ModalComp = props => {
  const {image, title, price, counter, info} = props;
  const {navigation, route} = props;
  const {modalVisible, setModalVisible} = props;
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
              source={{uri: info.image}}
              style={{height: winWidth * 0.3, width: winWidth * 0.3}}
            />
            <View style={{width: winWidth * 0.3}}>
              <Text
                style={{
                  fontSize: winWidth * 0.04,
                  color: 'black',
                  fontWeight: '600',
                }}>
                {info.title}
              </Text>
            </View>

            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                alignContent: 'flex-end',
                alignSelf: 'flex-end',
                right: winWidth * 0.06,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Text style={{fontSize: winWidth * 0.05}}> {info.price}</Text>
              </View>
              <Counter />
            </View>
          </View>
          <TouchableOpacity
            style={{
              justifyContent: 'flex-end',
              width: winWidth * 0.86,
              alignContent: 'flex-end',
              alignItems: 'flex-end',
            }}
            onPress={() => setModalVisible(false)}>
            <View
              style={{
                height: winWidth * 0.1,
                width: winWidth * 0.2,
                backgroundColor: 'black',
              }}>
              <View style={{padding: winWidth * 0.02, left: winWidth * 0.02}}>
                <Text style={{color: 'white'}}>tmmdır</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalComp;
