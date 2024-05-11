import {StyleSheet, Dimensions} from 'react-native';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  view1: {
    flexDirection: 'row',
    width: winWidth * 0.6,
    justifyContent: 'space-between',
    marginLeft: winWidth * 0.04,
  },

  size_style: {
    color: 'white',
    fontSize: winWidth * 0.04,
    fontWeight: '500',
  },

  us_size: {
    color: 'white',
    fontSize: winWidth * 0.04,
    textDecorationLine: 'underline',
  },
  text_style: {
    color: 'white',
    fontSize: winWidth * 0.04,
  },
  view_style: {
    height: winWidth * 0.1,
    width: winWidth * 0.1,
    borderRadius: winWidth * 0.1,
    backgroundColor: '#5B5B5B',
  },
  view: {
    alignItems: 'center',
    height: winWidth * 0.1,
    justifyContent: 'center',
  },
  number: {
    color: 'white',
    fontWeight: '500',
    fontSize: winWidth * 0.04,
  },
  blue_view: {
    height: winWidth * 0.1,
    width: winWidth * 0.1,
    borderRadius: winWidth * 0.1,
    backgroundColor: '#6DC7FB',
  },
  view_position: {
    alignItems: 'center',
    height: winWidth * 0.1,
    justifyContent: 'center',
  },
});
