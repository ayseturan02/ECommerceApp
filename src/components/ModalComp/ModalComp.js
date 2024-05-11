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
import Counter from '../Counter/Counter';

const ModalComp = props => {
  const {navigation, route} = props;

  const {modalVisible, setModalVisible} = props;

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
                <Text>{}</Text>
                <Counter />
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalComp;
