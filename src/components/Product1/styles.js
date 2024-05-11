import {StyleSheet, Text, View, Dimensions} from 'react-native';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  image_position: {
    height: winHeight * 0.4,
    width: winWidth * 0.9,
    borderRadius: winWidth * 0.05,
    backgroundColor: 'white',
  },

  image_size: {
    height: winWidth * 0.6,
    width: winWidth * 0.6,
    borderRadius: winWidth * 0.05,
  },
  image: {
    alignContent: 'center',
    justifyContent: 'center',
    padding: winWidth * 0.15,
  },
  title_position: {
    height: winHeight * 0.2,
    width: winWidth * 0.9,
    alignContent: 'center',
    alignSelf: 'center',
  },
  title_size: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: winWidth * 0.03,
  },
  heart_position: {
    width: winWidth * 0.9,
    alignItems: 'flex-end',
    alignContent: 'center',
    margin: winWidth * 0.03,
  },
});
