// component/common/InputBox.js
import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import Colors from '../../constant/Colors';

const InputBox = ({ label, value, onChangeText, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholder={`Nhập ${label}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderColor: Colors.gray,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default InputBox;
