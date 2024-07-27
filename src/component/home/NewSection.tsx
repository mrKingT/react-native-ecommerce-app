import { ScrollView, ScrollViewComponent, StyleSheet, Text, View,FlatList, FlatListComponent,ActivityIndicator } from 'react-native'
import React, {useEffect,useState} from 'react'
import Colors from '../../constant/Colors'
import NewListItem from './NewListItem'
import { Float } from 'react-native/Libraries/Types/CodegenTypes'


type Products={
  id:Number
  title:String
  price:Float
  description:String 
  category:String 
  image:String 
  rating:{
    rate:Float
    count:Number
  }
}

export default function NewSection() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState()

  const getProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products?limit=5');
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
    <View style={styles.container}>
      <View style={styles.headerView}>
        <View style={styles.newView}>
          <Text style={styles.newText}>New</Text>
          <Text style={styles.viewAllText}>view all</Text>
        </View>
        <Text style={styles.subHeadingText}>You’ve never seen it before!</Text>
        <View style={styles.listItemView}>
          {isLoading?<ActivityIndicator/>:
          (
            <FlatList
            data ={data}
            horizontal
            keyExtractor={({id}) => id}
          renderItem={({item}) => (
             <NewListItem iconText={'NEW'} iconbackground={'#000000'} price={item.price} 
             category={item.category}
             name={item.title}
             review={item.rating.rate}
             imageUrl={item.image}
             />
          )}
            />
          )
          }          
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:5,
    marginLeft:10
  },
  headerView:{
    flex:1,
    paddingLeft:1,
    paddingRight:10
  },
  newView:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingLeft:1,
  },
  newText:{
    fontSize:35,
    fontWeight:'bold'
  },
  subHeadingText:{
    color:Colors.textGray
  },
  viewAllText:{
    alignItems:'center',
    justifyContent:'center'
  },
  listItemView:{
    marginBottom:10,
    marginTop:10,
    marginLeft:10
  }
})