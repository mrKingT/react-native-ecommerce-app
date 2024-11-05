import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Colors from '../constant/Colors';

export default function PaymentScreen({ navigation }) {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [loading, setLoading] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [bank, setBank] = useState('');
  const [accountNumber, setAccountNumber] = useState('');

  const handlePayment = async () => {
    if (!selectedPaymentMethod) {
      alert("Vui lòng chọn phương thức thanh toán.");
      return;
    }
    if (selectedPaymentMethod === 'credit_card') {
      if (!cardNumber || !cardHolderName || !expiryDate || !bank || !accountNumber) {
        alert("Vui lòng điền đầy đủ thông tin thẻ và ngân hàng.");
        return;
      }
    }

    setLoading(true);

    // Gọi API để lưu thông tin thanh toán
    try {
      const response = await fetch('http://10.18.2.155:3000/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paymentMethod: selectedPaymentMethod,
          cardNumber,
          cardHolderName,
          expiryDate,
          bank,
          accountNumber,
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        alert(data.message); // Thông báo thanh toán thành công
        navigation.navigate('Shop'); // Chuyển đến màn hình Shop
      } else {
        alert(data.error || 'Có lỗi xảy ra, vui lòng thử lại.'); // Thông báo lỗi
      }
    } catch (error) {
      console.error('Có lỗi khi gửi yêu cầu:', error);
      alert('Có lỗi xảy ra, vui lòng kiểm tra kết nối và thử lại.');
    } finally {
      setLoading(false); // Đặt loading về false sau khi xử lý xong
    }
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.creditCard}>
          <Text style={styles.loadingText}>Đang xử lý thanh toán...</Text>
          <Image
            style={styles.bankLogo}
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Visa_Logo.svg/1200px-Visa_Logo.svg.png' }}
          />
          <Text style={styles.cardNumber}>{cardNumber || '**** **** **** ****'}</Text>
          <Text style={styles.cardDetails}>
            {cardHolderName || 'Họ Tên Chủ Thẻ'}
          </Text>
          <Text style={styles.expiryDate}>{expiryDate || 'MM/YY'}</Text>
          <ActivityIndicator size="large" color="#fff" style={styles.spinner} />
        </View>
      ) : (
        <>
          <Text style={styles.title}>Thanh Toán</Text>
          <Text style={styles.description}>Chọn phương thức thanh toán:</Text>

          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedPaymentMethod}
              onValueChange={(itemValue) => setSelectedPaymentMethod(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Chọn phương thức thanh toán" value="" />
              <Picker.Item label="Thẻ Tín Dụng" value="credit_card" />
              <Picker.Item label="PayPal" value="paypal" />
              <Picker.Item label="Ví MoMo" value="momo" />
              <Picker.Item label="ZaloPay" value="zalopay" />
            </Picker>
          </View>

          {selectedPaymentMethod === 'credit_card' && (
            <View style={styles.formContainer}>
              <TextInput
                style={styles.input}
                placeholder="Số Thẻ"
                value={cardNumber}
                onChangeText={setCardNumber}
                keyboardType="numeric"
              />
              <TextInput
                style={styles.input}
                placeholder="Họ Tên Chủ Thẻ"
                value={cardHolderName}
                onChangeText={setCardHolderName}
              />
              <Text style={styles.description}>Chọn Ngân Hàng:</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={bank}
                  onValueChange={(itemValue) => setBank(itemValue)}
                  style={styles.picker}
                >
                  <Picker.Item label="Chọn ngân hàng" value="" />
                  <Picker.Item label="VIETCOMBANK" value="bank_a" />
                  <Picker.Item label="VIETTINBANK" value="bank_b" />
                  <Picker.Item label="AGRIBANK" value="bank_c" />
                  <Picker.Item label="TPBANK" value="bank_d" />
                </Picker>
              </View>
              <TextInput
                style={styles.input}
                placeholder="Số Tài Khoản"
                value={accountNumber}
                onChangeText={setAccountNumber}
                keyboardType="numeric"
              />
              <TextInput
                style={styles.input}
                placeholder="Ngày hết hạn (MM/YY)"
                value={expiryDate}
                onChangeText={setExpiryDate}
              />
            </View>
          )}

          <Button
            title="Xác Nhận Thanh Toán"
            onPress={handlePayment}
            color={Colors.primaryColor}
            disabled={loading} // Disable button when loading
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primaryBackgroundColor,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    color: '#555',
  },
  pickerContainer: {
    width: '90%',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: Colors.primaryColor,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  picker: {
    width: '100%',
    height: 50,
  },
  creditCard: {
    width: 400,
    height: 250,
    backgroundColor: '#4CAF50',
    borderRadius: 15,
    position: 'relative',
    overflow: 'hidden',
    marginBottom: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    elevation: 5,
  },
  bankLogo: {
    width: 60,
    height: 40,
    position: 'absolute',
    top: 20,
    left: 20,
  },
  cardNumber: {
    color: '#fff',
    fontSize: 24,
    marginTop: 50,
    letterSpacing: 4,
  },
  cardDetails: {
    color: '#fff',
    fontSize: 16,
    marginTop: 10,
  },
  expiryDate: {
    color: '#fff',
    fontSize: 16,
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  loadingText: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 20,
  },
  spinner: {
    marginTop: 10,
  },
  formContainer: {
    width: '90%',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: Colors.primaryColor,
  },
  input: {
    height: 40,
    borderColor: Colors.primaryColor,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
