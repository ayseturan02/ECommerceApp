import {StyleSheet, Text, View, Dimensions} from 'react-native';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  text: {
    fontSize: winWidth * 0.06,
    color: 'white',
    fontWeight: '500',
    alignSelf: 'center',
  },
});
