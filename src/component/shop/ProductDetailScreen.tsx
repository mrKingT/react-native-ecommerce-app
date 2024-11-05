import { StyleSheet, Text, View, Image, Button, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import Colors from '../../constant/Colors';

export default function ProductDetailScreen({ route, navigation }) {
  const { product } = route.params;
  const [cart, setCart] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        
        // Lọc các sản phẩm liên quan
        const related = data.filter(item => item.category === product.category && item.id !== product.id);
        setRelatedProducts(related);
      } catch (error) {
        console.error("Lỗi khi gọi API sản phẩm liên quan:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRelatedProducts();
  }, [product.category, product.id]);

  const addToCart = () => {
    setCart((prevCart) => [...prevCart, product]);
    alert('Sản phẩm đã được thêm vào giỏ hàng!');
  };

  const goToBag = () => {
    navigation.navigate('BagScreen', { cart });
  };

  const toggleFavorite = () => {
    setIsFavorite((prevFavorite) => {
      const newFavoriteStatus = !prevFavorite;
      if (newFavoriteStatus) {
        setFavorites((prevFavorites) => [...prevFavorites, product]);
      } else {
        setFavorites((prevFavorites) => prevFavorites.filter((item) => item.id !== product.id));
      }
      alert(newFavoriteStatus ? 'Đã thêm vào yêu thích!' : 'Đã bỏ yêu thích sản phẩm!');
      return newFavoriteStatus;
    });
  };

  const goToFavorites = () => {
    navigation.navigate('FavoritesScreen', { favorites });
  };

  const handleRelatedProductPress = (relatedProduct) => {
    navigation.navigate('ProductDetail', { product: relatedProduct });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Nút Quay lại */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>Quay lại</Text>
      </TouchableOpacity>

      <Image source={{ uri: product.image }} style={styles.productImage} />
      <Text style={styles.productName}>{product.title || 'Tên sản phẩm không có'}</Text>
      <Text style={styles.productPrice}>{`Giá: ${product.price || 'Không có giá'} $`}</Text>
      <Text style={styles.productDescription}>{product.description || 'Không có mô tả'}</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Thêm vào giỏ hàng"
          onPress={addToCart}
          color={Colors.primaryColor}
        />
        <Button
          title="Xem giỏ hàng"
          onPress={goToBag}
          color={Colors.secondaryColor}
        />
      </View>

      <TouchableOpacity onPress={toggleFavorite} style={styles.favoriteButton}>
        <Text style={{ color: isFavorite ? 'red' : 'gray' }}>
          {isFavorite ? '❤️ Đã yêu thích' : '🤍 Yêu thích'}
        </Text>
      </TouchableOpacity>

      <Button
        title="Xem yêu thích"
        onPress={goToFavorites}
        color={Colors.primaryColor}
        style={styles.favoriteButton}
      />

      {/* Danh sách sản phẩm liên quan */}
      <Text style={styles.relatedTitle}>Sản phẩm liên quan</Text>
      {loading ? (
        <Text>Đang tải sản phẩm liên quan...</Text>
      ) : (
        <FlatList
          data={relatedProducts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleRelatedProductPress(item)} style={styles.relatedProduct}>
              <Image source={{ uri: item.image }} style={styles.relatedImage} />
              <Text style={styles.relatedProductName}>{item.title || 'Tên sản phẩm không có'}</Text>
              <Text style={styles.relatedProductPrice}>{`Giá: ${item.price || 'Không có giá'} $`}</Text>
            </TouchableOpacity>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: Colors.primaryBackgroundColor,
  },
  backButton: {
    alignSelf: 'flex-start',
    padding: 10,
    backgroundColor: Colors.primaryColor,
    borderRadius: 5,
    marginBottom: 10,
  },
  backButtonText: {
    color: Colors.whiteColor,
    fontSize: 16,
  },
  productImage: {
    width: '100%',
    height: 250,
    borderRadius: 10,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  productPrice: {
    fontSize: 20,
    color: Colors.primaryColor,
    marginVertical: 5,
  },
  productDescription: {
    fontSize: 16,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  favoriteButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  relatedTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  relatedProduct: {
    marginRight: 15,
    width: 150,
  },
  relatedImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  relatedProductName: {
    fontSize: 16,
    marginVertical: 5,
  },
  relatedProductPrice: {
    fontSize: 14,
    color: Colors.primaryColor,
  },
});
