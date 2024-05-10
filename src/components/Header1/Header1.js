import {Text, View, Dimensions, TextInput, Image} from 'react-native';
import React from 'react';

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;
import {search, camera} from '../../assets/icons/index';

import styles from './styles';
import Input from '../Input/Input';

const Header1 = props => {
  const {Logo} = props;
  return (
    <View style={styles.view}>
      <View style={styles.position}>
        <View>
          <Image source={Logo} style={styles.logo_size} />
        </View>
        <Input icon={search} placeholder={'what are you looking for?'} />
        <View>
          <Image source={camera} style={styles.camera_size} />
        </View>
      </View>
    </View>
  );
};

export default Header1;
