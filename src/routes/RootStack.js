import React from 'react';
import {HomePage, Product, Products} from '../screens';
import {RouterNames} from '../config';
const Stack = createNativeStackNavigator();
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={RouterNames.PRODUCT}
      screenOptions={{headerShown: false}}
      >
      <Stack.Screen name={RouterNames.HOMEPAGE} component={HomePage} />
      <Stack.Screen name={RouterNames.PRODUCTS} component={Products} />
      <Stack.Screen name={RouterNames.PRODUCT} component={Product} />
    </Stack.Navigator>
  );
};
