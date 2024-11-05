import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import CustomHeader from '../component/common/CustomHeader';
import InputBox from '../component/common/InputBox';
import ButtonPrimary from '../component/common/ButtonPrimary';
import Colors from '../constant/Colors';

export default function LoginScreen({ navigation }) {
  let height = Dimensions.get("window").height;

  return (
    <SafeAreaView style={{ backgroundColor: Colors.primaryBackgroundColor }}>
      <View>
        <CustomHeader title='' navigation={navigation} />
        <View style={[styles.screenContainer, { height: height }]}>
          <Text style={styles.headingText}>Đăng nhập</Text>
          <View style={styles.formContainer}>
            <InputBox label='Email' placeHolder='' validate={validateEmail} inputType={false} />
            <InputBox label='Password' placeHolder='' validate={validatePass} inputType={true} />
            <View style={styles.forgotPassContainer}>
              <Text style={styles.forgotText}>Forgot your password?</Text>
              <Image style={styles.forgotPassIcon} source={require('../assets/icons/icon-arrow-right.png')} />
            </View>
            <ButtonPrimary
              title={'LOGIN'}
              onPress={() => navigation.navigate('Main')}
              backgroundColor={Colors.primaryColor}
              style={styles.loginButton}
              textColor={Colors.whiteColor}
              textStyle={styles.loginButtonText}
            />
          </View>
          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.registerLink}> Đăng kí ngay </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.socialContainer}>
            <Text>Or login with social account</Text>
            <View style={styles.socialMediaIconContainer}>
              <View style={styles.socialIconContainer}>
                <Image style={styles.socialIcon} source={require('../assets/icons/icon-google.png')} />
              </View>
              <View style={styles.socialIconContainer}>
                <Image style={styles.socialIcon} source={require('../assets/icons/icon-facebook.png')} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

function validateEmail(text) {
  return text.includes("@");
}

function validatePass(text) {
  return text.length >= 8;
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
  forgotPassIcon: {
    height: 30,
    width: 30,
  },
  forgotPassContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  forgotText: {
    fontWeight: '500',
    fontSize: 14,
  },
  loginButton: {
    height: 50,
  },
  loginButtonText: {
    fontSize: 16,
    color: Colors.whiteColor,
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  registerText: {
    fontSize: 14,
    color: Colors.black,
  },
  registerLink: {
    fontSize: 14,
    color: Colors.primaryColor,
    fontWeight: 'bold',
  },
  socialMediaIconContainer: {
    flexDirection: 'row',
  },
  socialIconContainer: {
    height: 60,
    width: 80,
    margin: 10,
    backgroundColor: Colors.whiteColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    elevation: 8,
  },
  socialIcon: {
    height: 25,
    width: 25,
  },
  socialContainer: {
    position: 'absolute',
    bottom: 90,
    left: 50,
    right: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});