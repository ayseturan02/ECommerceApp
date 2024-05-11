import {StyleSheet, Text, View, Dimensions} from 'react-native';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;


export default styles = StyleSheet.create({
  minusSign_position: {
    backgroundColor: 'white',
    height: winWidth * 0.1,
    width: winWidth * 0.1,
    borderBottomLeftRadius: winWidth * 0.1,
    borderTopLeftRadius: winWidth * 0.1,
    borderColor: 'white',
    borderWidth: winWidth * 0.002,
  },

  minusSign_size: {
    alignItems: 'center',
    justifyContent: 'center',
    height: winWidth * 0.1,
  },

  counter: {
    backgroundColor: 'black',
    height: winWidth * 0.1,
    width: winWidth * 0.1,
    borderColor: 'white',
    borderWidth: winWidth * 0.002,
  },

  counter_style: {
    color: 'white',
    textAlign: 'center',
    fontSize: winWidth * 0.06,
  },
  add: {
    backgroundColor: 'white',
    height: winWidth * 0.1,
    width: winWidth * 0.1,
    borderBottomRightRadius: winWidth * 0.1,
    borderTopRightRadius: winWidth * 0.1,
    borderColor: 'white',
    borderWidth: winWidth * 0.002,
  },
  add_position: {
    alignItems: 'center',
    justifyContent: 'center',
    height: winWidth * 0.1,
  },
  add_size: {width: winWidth * 0.05, height: winWidth * 0.05},
});
