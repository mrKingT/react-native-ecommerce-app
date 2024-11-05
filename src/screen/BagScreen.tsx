import { StyleSheet, Text, View, SafeAreaView, Image, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import CustomHeader from '../component/common/CustomHeader';
import ButtonPrimary from '../component/common/ButtonPrimary';
import Colors from '../constant/Colors';

export default function BagScreen({ route, navigation }) {
  const { cart } = route.params; // Nhận giỏ hàng từ navigation
  const [quantities, setQuantities] = useState(cart.map(() => 1)); // Khởi tạo số lượng cho mỗi sản phẩm

  const updateQuantity = (index, delta) => {
    setQuantities((prev) => {
      const newQuantities = [...prev];
      const newQuantity = Math.max(1, newQuantities[index] + delta); // Đảm bảo số lượng không nhỏ hơn 1
      newQuantities[index] = newQuantity;
      return newQuantities;
    });
  };

  const totalAmount = cart.reduce((sum, item, index) => {
    return sum + item.price * quantities[index];
  }, 0);

  const renderItem = ({ item, index }) => (
    <View style={styles.productContainer}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productTitle}>{item.title}</Text>
      <Text style={styles.productPrice}>{`Giá: ${item.price} $`}</Text>
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={() => updateQuantity(index, -1)}>
          <Text style={styles.quantityButton}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{quantities[index]}</Text>
        <TouchableOpacity onPress={() => updateQuantity(index, 1)}>
          <Text style={styles.quantityButton}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const handlePaymentPress = () => {
    // Điều hướng đến trang thanh toán với giỏ hàng
    navigation.navigate('PaymentScreen', { cart, quantities, totalAmount });
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title="Giỏ hàng" navigation={navigation} />
      {cart.length > 0 ? (
        <View style={styles.innerContainer}>
          <FlatList
            data={cart}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            contentContainerStyle={styles.productList}
          />
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>{`Tổng tiền: ${totalAmount.toFixed(2)} $`}</Text>
            <ButtonPrimary 
              title="Thanh toán" 
              onPress={handlePaymentPress} // Gắn sự kiện cho nút thanh toán
              style={styles.button} 
              textColor={Colors.whiteColor} 
              backgroundColor={Colors.primaryColor} 
              textStyle={styles.buttonText} 
            />
          </View>
        </View>
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyCartText}>Giỏ hàng trống !!!</Text>
          <Image style={styles.emptyCartImage} source={require('../assets/image/bag/cart.png')} />
          <ButtonPrimary 
            title="Đi đến trang chủ" 
            onPress={() => navigation.navigate('Home')} // Điều hướng đến trang chủ
            style={styles.button} 
            textColor={Colors.whiteColor} 
            backgroundColor={Colors.primaryColor} 
            textStyle={styles.buttonText} 
          />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryBackgroundColor,
  },
  innerContainer: {
    flex: 1,
    padding: 10,
  },
  button: {
    width: '100%', // Sử dụng toàn bộ chiều rộng cho nút
    height: 50,
    marginVertical: 10, // Thêm khoảng cách giữa các nút
  },
  buttonText: {
    color: Colors.whiteColor,
    fontSize: 20,
    fontWeight: 'bold',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  emptyCartImage: {
    height: 150,
    width: 150,
    marginTop: 20,
    marginBottom: 20,
  },
  emptyCartText: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  productList: {
    padding: 10,
  },
  productContainer: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    color: Colors.primaryColor,
    marginBottom: 10,
  },
  productImage: {
    width: '100%',
    height: 100, // Giảm chiều cao hình ảnh để phù hợp hơn
    borderRadius: 5,
    marginBottom: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  quantityButton: {
    fontSize: 24,
    paddingHorizontal: 10,
    color: Colors.primaryColor,
  },
  quantityText: {
    fontSize: 20,
    marginHorizontal: 10,
  },
  totalContainer: {
    padding: 20,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
