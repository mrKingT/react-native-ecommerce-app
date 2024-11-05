import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import CustomHeader from '../component/common/CustomHeader';
import Colors from '../constant/Colors';

export default function ProfileScreen({ navigation }) {
  const navigateToLogin = () => {
    navigation.navigate('Login');  // Điều hướng đến màn hình Login
  };

  const navigateToEditProfile = () => {
    navigation.navigate('Editprofile', {
      user: {
        name: 'Thành Tâm', // Có thể lấy từ state hoặc props
        email: 'tam@mail.com', // Có thể lấy từ state hoặc props
        // Không thêm địa chỉ và số điện thoại vào đây
      },
    });
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <CustomHeader title='' navigation={navigation} />
      <View style={styles.screenContainer}>
        <View>
          <Text style={styles.headingText}>My profile</Text> 
        </View>
        <View style={styles.imageNameContainer}>
          <Image style={styles.profileImage} source={require('../assets/image/profile/user.png')} />
          <View style={styles.nameEmailContainer}>
            <Text style={styles.nameText}>Thành Tâm</Text>
            <Text style={styles.emailText}>tam@mail.com</Text>
          </View>
        </View>  
      </View> 
      <ScrollView style={styles.scrollContainer}>
        <TouchableOpacity style={styles.loginButton} onPress={navigateToLogin}>
          <Text style={styles.loginButtonText}>Đăng Xuất</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={navigateToEditProfile}>
          <Text style={styles.loginButtonText}>Chỉnh Sửa Hồ Sơ</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: Colors.primaryBackgroundColor,
    paddingHorizontal: 15,
    height: 150,
  },
  headingText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  profileImage: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  imageNameContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  nameEmailContainer: {
    paddingHorizontal: 10,
    justifyContent: 'flex-start',
  },
  nameText: {
    fontSize: 25,
    fontWeight: '600',
  },
  emailText: {
    color: Colors.textGray,
  },
  loginButton: {
    backgroundColor: Colors.primaryColor,  // Màu nền cho nút
    padding: 10,
    borderRadius: 5,
    marginTop: 20,  // Khoảng cách từ phần trên
    alignItems: 'center',  // Căn giữa nội dung nút
  },
  loginButtonText: {
    color: '#fff',  // Màu chữ
    fontWeight: 'bold',
    fontSize: 16,
  },
  safeAreaView: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
});
