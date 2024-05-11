import {
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import {heart, heart1} from './../../assets/icons/index';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;
import {useState} from 'react';

const Hearts = () => {
  const [liked, setLiked] = useState(false);
  const [selectedText, setSelectedText] = useState('');
  const handlePress = text => {
    setLiked(!liked);
    setSelectedText(text);
  };
  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        <Image
          source={liked ? heart1 : heart}
          style={{
            height: winWidth * 0.06,
            width: winWidth * 0.06,
            tintColor: liked ? 'red' : 'white',
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Hearts;
const styles = StyleSheet.create({})
