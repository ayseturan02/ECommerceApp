import {StyleSheet, Text, View, Dimensions} from 'react-native';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  new_arrivals: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: winWidth * 0.9,
    alignSelf: 'center',
    alignItems: 'center',
  },
  see_all_style: {
    color: '#646464',
    fontSize: winWidth * 0.04,
    textDecorationLine: 'underline',
  },
});
