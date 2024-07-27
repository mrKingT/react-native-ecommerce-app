import { StyleSheet, Text, View,ScrollView,ActivityIndicator,FlatList } from 'react-native'
import React, {useEffect,useState} from 'react'
import NewListItem from './NewListItem'
import Colors from '../../constant/Colors'

export default function SaleSection() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState()

  const getProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products/category/jewelery');
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
          <Text style={styles.newText}>Sale</Text>
          <Text style={styles.viewAllText}>view all</Text>
        </View>
        <Text style={styles.subHeadingText}>Super summer sale</Text>
        <View style={styles.listItemView}>
          <ScrollView horizontal={true}>
          {/* <NewListItem iconText={'-20%'} iconbackground={Colors.primaryColor}/>
          <NewListItem iconText={'-10%'} iconbackground={Colors.primaryColor}/>
          <NewListItem iconText={'-15%'} iconbackground={Colors.primaryColor}/>
          <NewListItem iconText={'-30%'} iconbackground={Colors.primaryColor}/>
          <NewListItem iconText={'-20%'} iconbackground={Colors.primaryColor}/> */}
          </ScrollView>
          {isLoading?<ActivityIndicator/>:
          (
            <FlatList
            data ={data}
            horizontal
            keyExtractor={({id}) => id}
          renderItem={({item}) => (
             <NewListItem iconText={'-20%'} iconbackground={Colors.primaryColor} price={item.price} 
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