import React, {useEffect, useState} from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ActivityIndicatorComponent,
  ActivityIndicator,
} from 'react-native'
import Icon from 'react-native-vector-icons/Feather' // Ensure you have this package installed
import Icon2 from 'react-native-vector-icons/MaterialIcons' // Ensure you have this package installed
import {useLoginUserMutation} from '../services/api'
import AsyncStorage from '@react-native-async-storage/async-storage'
// import heading from '../components/CustomText' // Assuming you have a CustomText component

// const {width} = Dimensions.get('window')
const {width, height} = Dimensions.get('window')

const Login = ({navigation}) => {
  const [phone, setPhone] = useState('')
  const [otp, setOtp] = useState('')

  const [login, {isLoading}, result] = useLoginUserMutation()

  // console.log(result)

  // console.log(checkToken())

  const handleLogin = async () => {
    // navigation.reset({
    //   index: 0,
    //   routes: [{name: 'DrawerNavigation'}],
    // })
    if (phone.length < 10 || otp.length < 4) {
      alert('Please enter valid phone number and OTP')
      return
    }

    try {
      console.time('login')
      // const response = await login({mobile: phone, otp: otp}).unwrap()
      const response = await login({Number: phone, MPIN: otp}).unwrap()

      console.timeEnd('login')

      console.log('Login response:', response)

      // Save token in AsyncStorage
      if (response?.Token) {
        await AsyncStorage.setItem('authToken', response.Token)
      }

      // Navigate to main app screen
      navigation.reset({
        index: 0,
        routes: [{name: 'DrawerNavigation'}],
      })
    } catch (error) {
      console.error('Login failed:', error)
      alert('Login failed. Please check your credentials.')
    }
  }

  return (
    <View style={styles.container}>
      {/* Top Background Box */}

      {/* {isLoading && <Text>Log in </Text>} */}

      <View style={styles.topBox} />
      <Image source={require('../assets/logo.png')} style={styles.logo} />

      {/* Overlapping White Card */}
      <View style={styles.card}>
        {/* Logo */}

        {/* Login Heading */}
        <Text style={styles.loginText}>Sign in to your Account</Text>

        {/* Phone Number Field */}

        {/* <View style={styles.underline} /> */}
        {/* OTP Field */}
        <View style={styles.inputContainer}>
          <View style={styles.phoneRow}>
            <Text style={styles.phoneIcon}>
              <Icon name={'smartphone'} size={20} color={'gray'} />
            </Text>
            <TextInput
              style={styles.phoneInput}
              placeholder='Enter phone number'
              placeholderTextColor='#999'
              keyboardType='phone-pad'
              value={phone}
              onChangeText={text => setPhone(text.replace(/[^0-9]/g, ''))}
              maxLength={10}
            />
            <TouchableOpacity
              style={styles.sendOtpButton}
              disabled={phone.length < 10}>
              <Text style={styles.sendOtpText}>Send OTP</Text>
            </TouchableOpacity>
          </View>
          {/* <View style={styles.underline} /> */}

          <View style={styles.phoneRow}>
            {/* <Text style={styles.inputLabel}>🔑 OTP</Text> */}
            <Text style={styles.phoneIcon}>
              <Icon2 name={'password'} size={20} color={'gray'} />
            </Text>
            <TextInput
              style={styles.phoneInput}
              placeholder='Enter OTP'
              placeholderTextColor='#999'
              keyboardType='numeric'
              value={otp}
              onChangeText={text => setOtp(text.replace(/[^0-9]/g, ''))}
              maxLength={4}
            />
            <TouchableOpacity
              style={styles.sendOtpButton}
              disabled={phone.length < 10}>
              <Text style={styles.sendOtpText}>Verify OTP</Text>
            </TouchableOpacity>
            {/* <View style={styles.underline} /> */}
          </View>

          {isLoading ? (
            <TouchableOpacity style={styles.otpButton}>
              <Text style={styles.otpButtonText}>Loading...</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={handleLogin} style={styles.otpButton}>
              <Text style={styles.otpButtonText}>Log in</Text>
            </TouchableOpacity>
          )}

          {/* <TouchableOpacity
            // onPress={() => navigation.navigate('DrawerNavigation')}
            onPress={handleLogin}
            style={styles.registration}
            // disabled={otp.length < 6}
          >
            <Text
              style={styles.registrationText}
              onPress={() => navigation.navigate('Registration')}>
              Registration
            </Text>
          </TouchableOpacity> */}

          <TouchableOpacity
            onPress={() => navigation.navigate('Registration')}
            style={styles.loginLink}>
            <Text style={styles.loginLinkText}>
              Create New Account{' '}
              <Text style={styles.loginLinkBold}>Registration</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topBox: {
    // position: 'absolute',
    backgroundColor: '#171449',
    // top: 10,
    height: height * 0.5, // 50% height
    // borderBottomLeftRadius: 40,
    // borderBottomRightRadius: 40,
  },
  card: {
    position: 'absolute',
    top: height * 0.4, // To center it vertically (half of topBox)
    alignSelf: 'center',
    width: width * 0.9,
    // height: height * 0.5, // Card takes 50% height
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  logo: {
    position: 'absolute',
    top: height * 0.2, // To center it vertically (25% from top)
    width: 120,
    height: 60,
    alignSelf: 'center',
    marginBottom: 10,
  },
  loginText: {
    fontSize: 22,
    // fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#171449',
    fontFamily: 'Switzer-Bold', // Ensure you have this font installed
  },
  inputContainer: {
    marginBottom: 20,
    // borderWidth: 1,
    // borderColor: '#ccc',
    // borderRadius: 10,
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    fontSize: 16,
    paddingVertical: 5,
    color: '#000',
  },
  underline: {
    height: 1,
    backgroundColor: '#ccc',
    marginTop: 5,
  },
  otpButton: {
    marginTop: 10,
    // backgroundColor: '#171449',

    paddingVertical: 6,
    borderRadius: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#171449',
    width: '100%',
    alignSelf: 'center',
    // color: '#171449',
  },
  otpButtonText: {
    color: '#171449',
    fontSize: 16,
    fontWeight: 'bold',
  },
  phoneRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  phoneIcon: {
    fontSize: 18,
    marginRight: 8,
  },
  phoneInput: {
    flex: 1,
    fontSize: 16,
    // paddingVertical: 5,
    color: '#000',
  },
  sendOtpButton: {
    backgroundColor: '#171449',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 13,
    marginLeft: 10,
    fontSize: 10,
  },
  sendOtpText: {
    color: '#fff',
    fontSize: 10,
  },

  registration: {
    alignItems: 'center',
    marginTop: 15,
  },
  registrationText: {
    color: '#171449',
    fontSize: 14,
    fontWeight: 'bold',
  },
  loginLink: {
    alignItems: 'center',
    marginTop: 15,
  },
  loginLinkText: {
    color: '#666',
    fontSize: 14,
  },
  loginLinkBold: {
    fontWeight: 'bold',
    color: '#171449',
  },
})
