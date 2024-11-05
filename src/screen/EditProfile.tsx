import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Colors from '../constant/Colors';

export default function EditProfileScreen({ route, navigation }) {
  const { user } = route.params; // Nhận thông tin người dùng từ props

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [address, setAddress] = useState(''); // Thêm trường địa chỉ
  const [phone, setPhone] = useState(''); // Thêm trường số điện thoại

  const handleSave = () => {
    // Lưu thông tin hoặc cập nhật theo cách của bạn
    alert('Thông tin đã được lưu!');
    navigation.goBack(); // Quay lại màn hình trước
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.label}>Tên</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        
        <Button title="Lưu" onPress={handleSave} color={Colors.primaryColor} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.primaryBackgroundColor,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  label: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.grayColor,
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
  },
});
