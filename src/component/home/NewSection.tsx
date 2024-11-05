import { ScrollView, StyleSheet, Text, View, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import Colors from '../../constant/Colors';
import NewListItem from './NewListItem';
import { useNavigation } from '@react-navigation/native'; // Nhập useNavigation để điều hướng

type Products = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export default function NewSection() {
  const navigation = useNavigation(); // Khởi tạo navigation
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Products[]>([]);

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
          <Text style={styles.newText}>Sản phẩm mới</Text>
          
            <Text style={styles.viewAllText}>xem tất cả</Text>
        
        </View>
      
        <View style={styles.listItemView}>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <FlatList
              data={data}
              horizontal
              keyExtractor={({ id }) => id.toString()} // Đảm bảo keyExtractor trả về chuỗi
              renderItem={({ item }) => (
                <NewListItem
                  iconText={'NEW'}
                  iconbackground={'#000000'}
                  price={item.price}
                  category={item.category}
                  name={item.title}
                  review={item.rating.rate}
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
    paddingTop: 20,
  },
  viewAllText: {
    color: Colors.primary, // Đảm bảo định nghĩa giá trị Colors.primary trong Colors.js hoặc Colors.ts
    fontSize: 16,
    fontWeight: 'bold',
  },
  listItemView: {
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 10,
  },
});
