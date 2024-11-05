// FavoritesScreen.js
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Image, TouchableOpacity } from 'react-native';
import Colors from '../constant/Colors';

export default function FavoritesScreen({ route, navigation }) {
  const { favorites = [] } = route.params || {}; // Nhận danh sách yêu thích từ props, mặc định là mảng rỗng

  const renderFavoriteItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.itemContainer} 
      onPress={() => navigation.navigate('ProductDetail', { product: item })} // Điều hướng đến chi tiết sản phẩm
    >
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <Text style={styles.itemText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Nút Quay lại */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>Quay lại</Text>
      </TouchableOpacity>

      {/* Danh sách sản phẩm yêu thích */}
      <FlatList
        data={favorites}
        renderItem={renderFavoriteItem}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Chưa có sản phẩm yêu thích.</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryBackgroundColor,
  },
  backButton: {
    padding: 10,
    backgroundColor: Colors.primaryColor,
    borderRadius: 5,
    alignSelf: 'flex-start',
    margin: 10,
  },
  backButtonText: {
    color: Colors.whiteColor,
    fontSize: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.grayColor,
    backgroundColor: Colors.whiteColor, // Thêm màu nền cho item
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  itemText: {
    fontSize: 18,
    color: Colors.primaryColor,
    flex: 1, // Giúp Text chiếm hết không gian còn lại
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: Colors.grayColor,
  },
});
