import {StyleSheet, Text, View, Dimensions} from 'react-native';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;
export default styles = StyleSheet.create({
  container: {
    height: winHeight * 0.3,
  },

  view: {
    backgroundColor: '#FFFFFF',
    height: winWidth * 0.6,
    width: winWidth * 0.9,
    borderRadius: winWidth * 0.08,
  },
  position: {
    margin: winWidth * 0.04,
    justifyContent: 'space-around',
    height: winHeight * 0.22,
  },
  text_style: {
    fontSize: winWidth * 0.07,
    color: 'black',
    fontWeight: '600',
  },
  yüzde_view: {
    backgroundColor: 'black',
    width: winWidth * 0.13,
    height: winWidth * 0.13,
    borderRadius: winWidth * 1,
  },
  yüzde_position: {
    alignContent: 'center',
    justifyContent: 'center',
    marginLeft: winWidth * 0.017,
    height: winWidth * 0.13,
  },
  price: {
    fontSize: winWidth * 0.04,
    color: '#4B4B4B',
    fontWeight: '500',
  },
  image: {
    alignSelf: 'flex-end',
    right: winWidth * 0.05,
    top: -winWidth * 0.3,
  },
  line_position: {
    flexDirection: 'row',
    height: winHeight * 0.03,
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
    width: winWidth * 0.4,
  },
  line: {
    height: winWidth * 0.01,
    width: winWidth * 0.08,
    backgroundColor: 'white',
    borderRadius: winWidth * 0.01,
  },
  image_position: {
    paddingTop: winWidth * 0.05,
    marginHorizontal: winWidth * 0.03,
  },
  image_view:{
    backgroundColor: 'white',
    height: winWidth * 0.35,
    width: winWidth * 0.45,
    borderRadius: winWidth * 0.08,
  },
  image_size:{
    height: winWidth * 0.35,
    width: winWidth * 0.45,
    borderRadius: winWidth * 0.08,
  },
  title_style:{
    fontSize: winWidth * 0.035,
    color: 'white',
    fontWeight: '400',
  },
  price_style:{
      fontSize: winWidth * 0.03,
      color: '#648F9C',
  },

});
