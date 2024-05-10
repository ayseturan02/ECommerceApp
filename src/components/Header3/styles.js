import {StyleSheet, Dimensions} from 'react-native';

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  view: {
    height: winHeight * 0.1,
    backgroundColor: 'black',
    width: winWidth * 0.96,
    borderBottomLeftRadius: winWidth * 0.08,
    borderBottomRightRadius: winWidth * 0.08,
  },
  position: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    width: winWidth * 0.9,
    justifyContent: 'center',
    height: winWidth * 0.2,
  },
});
