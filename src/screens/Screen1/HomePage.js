import {
  Button,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;
import {Header1, FlatList0, Line, FlatList4} from './../../components/index';
import {logo} from '../../assets/images/index';
import styles from './styles';
import {RouterNames} from '../../config';

const HomePage = props => {
  const {navigation} = props;

  return (
    <SafeAreaView style={{backgroundColor: '#191919', height: winHeight}}>
      <ScrollView style={{height: winHeight * 1}}>
        <View style={{height: winHeight * 1.3}}>
          <Header1 Logo={logo} />
          <View style={{paddingTop: winWidth * 0.05}}>
            <FlatList0 />
            <Line />
            <View style={styles.new_arrivals}>
              <View>
                <Text style={{color: 'white', fontSize: winWidth * 0.05}}>
                  New Arrivals
                </Text>
              </View>
              <View>
                <TouchableOpacity
                  title="See All"
                  onPress={() => {
                    navigation.navigate(RouterNames.PRODUCTS);
                  }}>
                  <Text style={styles.see_all_style}> See All</Text>
                </TouchableOpacity>
              </View>
            </View>
            <FlatList4 />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;
