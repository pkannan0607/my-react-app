import React from 'react';
import { View, Text, Button, BackHandler, TouchableOpacity } from 'react-native';
import JsonDataDisplay from '../json/Table';
import Products from './Products'
import Icons from 'react-native-vector-icons/MaterialIcons';

export default function Home({ route, navigation }) {

  const itemId = navigation.getParam('itemId');
  //const { user, otherParam } = navigation.getParam();
  const pressHandler = () => {
    //navigation.navigate('Home');
    navigation.push('Login');
  }
  return (
    
      <View>
        <TouchableOpacity onPress="this.pressHandler">
          {/* <Icons name={'arrow-back'} size={30} color='#fff' style={{ marginLeft: '3%' }} /> */}
        </TouchableOpacity>
        <Text>User Id: {itemId}</Text>
        {/* <Button title='Go to Login' onPress={pressHandler}></Button> */}
        {/* <JsonDataDisplay/> */}
        <Products />

      </View>
    
  )
}
