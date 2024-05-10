import {StyleSheet, Dimensions} from 'react-native';

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  input: {
    borderColor: 'white',
    borderWidth: winWidth * 0.002,
    borderRadius: winWidth * 0.2,
    width: winWidth * 0.7,
    height: winWidth * 0.1,
    backgroundColor: 'black',
  },
  search_size: {
    width: winWidth * 0.04,
    height: winWidth * 0.04,
  },
});
