import { StyleSheet, Text, TextInput, View, Image } from 'react-native';
import React, { useState } from 'react';
import Colors from '../../constant/Colors';

type InputProps = {
  label: string;
  placeHolder: string;
  validate: (text: string) => boolean; // Thay đổi kiểu trả về thành boolean
};

export default function InputBox(props: InputProps) {
  const [text, setText] = useState('');
  const [validEmail, setValidEmail] = useState(false);

  return (
    <View style={styles.inputBoxContainer}>
      <View style={styles.inputContainer}>
        <Text style={styles.labelText}>{props.label}</Text>
        <TextInput
          style={styles.input}
          placeholder={props.placeHolder} // Thêm placeholder
          value={text} // Sử dụng value thay vì defaultValue
          onChangeText={newText => {
            setText(newText); // Cập nhật giá trị của text
            setValidEmail(props.validate(newText)); // Kiểm tra tính hợp lệ
          }}
        />
      </View>
      <Image
        style={[styles.iconCheck, { display: validEmail ? 'flex' : 'none' }]}
        source={require('../../assets/icons/icon-check-green.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    padding: 10,
  },
  inputBoxContainer: {
    height: 60,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 1,
    borderRadius: 5,
    backgroundColor: Colors.whiteColor,
    marginVertical: 10,
  },
  iconCheck: {
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  inputContainer: {
    flexDirection: 'column',
    flex: 1,
  },
  labelText: { // Sửa lỗi chính tả từ 'lableText' thành 'labelText'
    color: Colors.textGray,
  },
});
