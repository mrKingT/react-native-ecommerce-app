import React, { useState, useEffect } from 'react';
import { Image, ImageBackground, StyleSheet, View, ActivityIndicator, Dimensions } from 'react-native';
import ButtonPrimary from '../common/ButtonPrimary';
import Colors from '../../constant/Colors';

// Lấy kích thước màn hình để sử dụng cho slide show
const { width, height } = Dimensions.get('window');

export default function HeroSection({ navigation }) {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // Gọi Fake Store API để lấy dữ liệu sản phẩm
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        // Lấy URL của ảnh từ dữ liệu sản phẩm
        const imageUrls = data.map(item => item.image);
        setImages(imageUrls);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data from Fake Store API:', error);
      }
    };

    fetchImages();
  }, []);

  // Tự động thay đổi ảnh sau mỗi 3 giây
  useEffect(() => {
    if (images.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Đổi ảnh sau mỗi 3 giây

      return () => clearInterval(interval); // Dọn dẹp interval khi component bị unmount
    }
  }, [images]);

  return (
    <View style={styles.container}>
      <ImageBackground resizeMode="cover" style={styles.backgroungImg}>
        <View>
          {loading ? (
            <ActivityIndicator size="large" color={Colors.primaryColor} />
          ) : (
            <Image style={styles.fullScreenImage} source={{ uri: images[currentImageIndex] }} />
          )}
          <ButtonPrimary 
            title="Check" 
            onPress={() => navigation.navigate('Shop')} 
            style={styles.button} 
            textColor={Colors.whiteColor} 
            backgroundColor={Colors.primaryColor} 
            textStyle={styles.buttonText}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroungImg: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  fullScreenImage: {
    width: width,
    marginTop:0, // Chiều rộng toàn màn hình
    height: height * 0.4, // Chiều cao chiếm 70% màn hình (bạn có thể điều chỉnh theo ý muốn)
    resizeMode: 'cover', // Để ảnh phủ đầy màn hình
  },
  button: {
    marginBottom: 35,
    marginLeft: 10,
    width: 160,
    height: 50,
  },
  buttonText: {
    fontWeight: '400',
    color: Colors.whiteColor,
    fontSize: 19,
  },
});
