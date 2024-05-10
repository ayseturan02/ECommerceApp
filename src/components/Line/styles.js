import {StyleSheet, Dimensions} from 'react-native';

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  line_position: {
    flexDirection: 'row',
    height: winHeight * 0.2,
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
    width: winWidth * 0.65,
    
  },
  line: {
    height: winWidth * 0.01,
    width: winWidth * 0.08,
    backgroundColor: 'white',
    borderRadius: winWidth * 0.01,
  },
});
