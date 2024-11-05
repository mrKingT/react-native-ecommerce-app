import { StyleSheet, Text, View, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import NewListItem from './NewListItem';
import Colors from '../../constant/Colors';
import { useNavigation } from '@react-navigation/native';

export default function SaleSection() {
  const navigation = useNavigation();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

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
          <Text style={styles.newText}>Sản phẩm giảm giá</Text>
         
            <Text style={styles.viewAllText}>Xem tất cả</Text>
        
        </View>
       
        <View style={styles.listItemView}>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <FlatList
              data={data}
              horizontal
              keyExtractor={({ id }) => id.toString()}
              renderItem={({ item }) => (
                <NewListItem
                  iconText="-20%"
                  iconbackground={Colors.primaryColor || '#FF6347'} // Màu dự phòng
                  price={item.price}
                  category={item.category}
                  name={item.title}
                  review={item.rating?.rate || 0} // Kiểm tra rating
                  imageUrl={item.image}
                />
              )}
            />
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    marginLeft: 10,
  },
  headerView: {
    flex: 1,
    paddingLeft: 1,
    paddingRight: 10,
  },
  newView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 1,
  },
  newText: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  subHeadingText: {
    color: Colors.textGray,
  },
  viewAllText: {
    color: Colors.primary || '#0000FF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  listItemView: {
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 10,
  },
});
