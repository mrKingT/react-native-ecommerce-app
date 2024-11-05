import { Dimensions, SafeAreaView, StyleSheet, Text, View, Alert } from 'react-native';
import React, { useState } from 'react';
import CustomHeader from '../component/common/CustomHeader';
import InputBox from '../component/common/InputBox';
import ButtonPrimary from '../component/common/ButtonPrimary';
import Colors from '../constant/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState(''); // Trường nhập số điện thoại
  const [otp, setOtp] = useState(''); // Trường nhập mã OTP
  const [otpSent, setOtpSent] = useState(false); // Trạng thái gửi OTP

  const handleSendOtp = () => {
    if (!phone) {
      Alert.alert('Thông báo', 'Vui lòng nhập số điện thoại.');
      return;
    }

    // Giả lập việc gửi OTP
    Alert.alert('Thông báo', `Mã OTP đã được gửi đến số điện thoại ${phone}`);
    setOtpSent(true); // Đánh dấu rằng mã OTP đã được gửi
  };

  const handleRegister = async () => {
    if (!name || !email || !password || !confirmPassword || !phone) {
      Alert.alert('Thông báo', 'Vui lòng nhập đầy đủ thông tin.');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Thông báo', 'Mật khẩu không khớp.');
      return;
    }
    if (!otpSent || !otp) {
      Alert.alert('Thông báo', 'Vui lòng nhập mã OTP.');
      return;
    }

    const user = { name, email, password, phone };
    await AsyncStorage.setItem('user', JSON.stringify(user));
    Alert.alert('Thông báo', 'Đăng ký thành công!', [{ text: 'OK', onPress: () => navigation.navigate('Login') }]);
  };

  let height = Dimensions.get("window").height;

  return (
    <SafeAreaView style={{ backgroundColor: Colors.primaryBackgroundColor }}>
      <View>
        <CustomHeader title='Đăng Ký' navigation={navigation} />
        <View style={[styles.screenContainer, { height: height }]}>
          <Text style={styles.headingText}>Đăng kí</Text>
          <View style={styles.formContainer}>
            <InputBox label='Name' placeHolder='Nhập tên của bạn' validate={() => true} onChangeText={setName} />
            <InputBox label='Email' placeHolder='Nhập email của bạn' validate={() => true} onChangeText={setEmail} />
            <InputBox label='Phone' placeHolder='Nhập số điện thoại' validate={() => true} onChangeText={setPhone} /> 
            <InputBox label='Password' placeHolder='Nhập mật khẩu' secureTextEntry validate={() => true} onChangeText={setPassword} />
            <InputBox label='Confirm Password' placeHolder='Nhập lại mật khẩu' secureTextEntry validate={() => true} onChangeText={setConfirmPassword} />
            {otpSent && (
              <View>
                <Text style={styles.otpInstructionText}>Nhập mã OTP đã gửi đến số điện thoại của bạn:</Text>
                <InputBox label='OTP' placeHolder='Nhập mã OTP' validate={() => true} onChangeText={setOtp} />
              </View>
            )}
            <ButtonPrimary
              title={otpSent ? 'ĐĂNG KÝ' : 'GỬI MÃ OTP'}
              onPress={otpSent ? handleRegister : handleSendOtp}
              backgroundColor={Colors.primaryColor}
              style={styles.registerButton}
              textColor={Colors.whiteColor}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    marginHorizontal: 20,
    backgroundColor: Colors.primaryBackgroundColor,
  },
  headingText: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 30,
    textAlign: 'center',
  },
  formContainer: {
    marginTop: 40,
  },
  registerButton: {
    height: 50,
    marginTop: 20,
  },
  otpInstructionText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
});
