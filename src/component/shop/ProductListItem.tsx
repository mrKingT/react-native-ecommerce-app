import { FlatList, StyleSheet, Text, View,ActivityIndicator } from 'react-native'
import React, {useEffect, useState} from 'react'
import NewListItem from '../home/NewListItem';
import Colors from '../../constant/Colors';

export default function ProductListItem() {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState()

  const getProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <View style={styles.listContainer}>
      {isLoading?<ActivityIndicator/>:
          (
            <FlatList
            style={styles.productList}
            data ={data}
            horizontal={false}
            numColumns={2}
            key={2}
            keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <NewListItem iconText={'-15%'} iconbackground={Colors.primaryColor}
            price={item.price} 
             category={item.category}
             name={item.title}
             review={item.rating.rate}
             imageUrl={item.image}
             boxstyle={180}
            />
          )}
            />
          )
          }  
    </View>
  )
}

const styles = StyleSheet.create({
  listContainer:{
    justifyContent:'center',
    alignItems:"center",
    backgroundColor:Colors.primaryBackgroundColor
  },
  productList:{
  },
  itemBox:{
    width:180
  }
})