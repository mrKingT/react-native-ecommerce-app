import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, FlatList, Text, View, TextInput, Alert } from 'react-native';
import CustomHeader from '../component/common/CustomHeader';
import CategoriesBar from '../component/common/CatagoriesBar';
import FilterBar from '../component/common/FilterBar';
import ProductListItem from '../component/shop/ProductListItem';

export default function ShopScreen({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const categoryAPIs = {
    'Áo thun': "https://fakestoreapi.com/products/category/men's clothing",
    'Quần': "https://fakestoreapi.com/products/category/women's clothing",
    'Phụ kiện': "https://fakestoreapi.com/products/category/jewelery",
  };

  const fetchAllProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setAllProducts(data);
      setProducts(data);
    } catch (error) {
      console.error("Lỗi khi gọi API sản phẩm:", error);
      Alert.alert("Lỗi", "Không thể tải sản phẩm.");
    } finally {
      setLoading(false);
    }
  };

  const fetchProducts = async (category) => {
    setLoading(true);
    try {
      const response = await fetch(categoryAPIs[category]);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Lỗi khi gọi API sản phẩm:", error);
      Alert.alert("Lỗi", "Không thể tải sản phẩm theo danh mục.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      fetchProducts(selectedCategory);
    } else {
      setProducts(allProducts);
    }
  }, [selectedCategory, allProducts]);

  const handleCategoryPress = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  const handleProductPress = (product) => {
    navigation.navigate('ProductDetail', { product });
  };

  const sortProductsByPrice = () => {
    const sortedProducts = [...products].sort((a, b) => a.price - b.price);
    setProducts(sortedProducts);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.row}>
        <ProductListItem 
          product={item} 
          onPress={() => handleProductPress(item)} 
        />
      </View>
    );
  };

  const filteredProducts = products.filter(product => 
    product.title && product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Tìm kiếm sản phẩm..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <CategoriesBar onCategoryPress={handleCategoryPress} />
      <FilterBar onSortByPrice={sortProductsByPrice} />

      {loading ? (
        <Text>Đang tải sản phẩm...</Text>
      ) : (
        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          ListEmptyComponent={<Text>Không có sản phẩm nào</Text>}
          windowSize={5}
          initialNumToRender={10}
          maxToRenderPerBatch={10}
          updateCellsBatchingPeriod={50}
          numColumns={2} // Thay đổi để hiển thị 2 sản phẩm trên 1 hàng
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#fff',
  },
  row: {
    flex: 1, // Cần thêm flex để sản phẩm có thể co dãn đều
    justifyContent: 'center', // Giữa các sản phẩm
    marginBottom: 10,
  },
  searchInput: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
});
