import React from 'react';
import { FlatList, Text, View, Image } from 'react-native';
import '../App.css';

function ProductCard(props) {
  return (
    <View style={{
      flex: 1,
      flexDirection: 'column',
    }}>
      <View style={{
        flex: 1,
        flexDirection: 'row',
      }}>
        <Text style={{ color: 'black', fontSize: 16 }}>ORDER  : #{props.product.id}</Text>
        <Text style={{ color: 'black', padding: 10, fontSize: 16 }}>ORDER PLACED  : 26 October 2021</Text>
      </View>
      <View style={{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'mediumseagreen'
      }}>

        <Image
          source={props.product.image}
          style={{ width: 100, height: 100, margin: 5 }}
        ></Image>
        <View style={{
          flex: 1,
          flexDirection: 'column',
          height: 100
        }}>
          <Text style={{ color: 'white', padding: 10, fontSize: 16 }}> {props.product.title} </Text>
          <Text style={{ color: 'white', padding: 10, fontSize: 16 }}> TOTAL :  {props.product.price} </Text>
        </View>
      </View>
    </View>
  )
}

export default ProductCard