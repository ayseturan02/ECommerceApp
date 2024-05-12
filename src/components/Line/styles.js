import {StyleSheet, Dimensions} from 'react-native';

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  line_position: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:winWidth*0.03,
  },
  line: {
    width: winWidth * 0.08,
    height: winWidth * 0.01,
    marginHorizontal: winWidth * 0.01,
    backgroundColor: 'gray',
  },
});
