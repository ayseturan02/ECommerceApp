import {StyleSheet, Text, View, Dimensions} from 'react-native';

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  view: {
    backgroundColor: 'black',
    height: winWidth * 0.22,
    width: winWidth * 0.96,
    borderBottomLeftRadius: winWidth * 0.1,
    borderBottomRightRadius: winWidth * 0.1,
    alignContent: 'center',
    alignSelf: 'center',
  },
  position: {
    flexDirection: 'row',
    padding: winWidth * 0.05,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  camera_size: {
    width: winWidth * 0.06,
    height: winWidth * 0.06,
  },
  logo_size: {
    width: winWidth * 0.06,
    height: winWidth * 0.06,
  },
});
