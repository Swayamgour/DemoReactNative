// import React from 'react'
// import {Text, View} from 'react-native'

// function RegistrationPage () {
//   return (
//     <View>
//       <Text>Registration Page</Text>
//     </View>
//   )
// }

// export default RegistrationPage

import React, {useState} from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
  ScrollView,
} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import Icon2 from 'react-native-vector-icons/MaterialIcons'
// import {useRegisterUserMutation} from '../services/api'; // Assuming you have a register endpoint

const {width, height} = Dimensions.get('window')

const RegistrationPage = ({navigation}) => {
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  //   const [register] = useRegisterUserMutation();
  const [register] = ''

  const handleRegister = async () => {
    if (
      !fullName ||
      !phone ||
      !email ||
      !password ||
      password !== confirmPassword
    ) {
      alert('Please fill all fields correctly and ensure passwords match')
      return
    }

    setIsLoading(true)
    try {
      const response = await register({
        Name: fullName,
        Number: phone,
        Email: email,
        Password: password,
      }).unwrap()

      // console.log('Registration successful:', response)
      alert('Registration successful! Please login.')
      navigation.navigate('Login')
    } catch (error) {
      console.error('Registration failed:', error)
      alert('Registration failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <ScrollView style={styles.container}>
      {/* Top Background Box */}
      <View style={styles.topBox} />
      <Image source={require('../assets/logo.png')} style={styles.logo} />

      {/* Registration Card */}
      <View style={styles.card}>
        <Text style={styles.loginText}>Create New Account</Text>

        {isLoading ? (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size='large' color='#171449' />
            <Text style={styles.loadingText}>Registering...</Text>
          </View>
        ) : (
          <View style={styles.inputContainer}>
            {/* Full Name Field */}
            <View style={styles.inputRow}>
              <Text style={styles.inputIcon}>
                <Icon name='user' size={20} color='gray' />
              </Text>
              <TextInput
                style={styles.inputField}
                placeholder='Full Name'
                placeholderTextColor='#999'
                value={fullName}
                onChangeText={setFullName}
              />
            </View>

            {/* Phone Number Field */}
            <View style={styles.inputRow}>
              <Text style={styles.inputIcon}>
                <Icon name='smartphone' size={20} color='gray' />
              </Text>
              <TextInput
                style={styles.inputField}
                placeholder='Phone Number'
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

            {/* Email Field */}
            <View style={styles.inputRow}>
              <Text style={styles.inputIcon}>
                <Icon name='mail' size={20} color='gray' />
              </Text>
              <TextInput
                style={styles.inputField}
                placeholder='Email Address'
                placeholderTextColor='#999'
                keyboardType='email-address'
                autoCapitalize='none'
                value={email}
                onChangeText={setEmail}
              />
            </View>

            {/* Password Field */}
            <View style={styles.inputRow}>
              <Text style={styles.inputIcon}>
                <Icon2 name='password' size={20} color='gray' />
              </Text>
              <TextInput
                style={styles.inputField}
                placeholder='Password'
                placeholderTextColor='#999'
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
              />
            </View>

            {/* Confirm Password Field */}
            <View style={styles.inputRow}>
              <Text style={styles.inputIcon}>
                <Icon2 name='password' size={20} color='gray' />
              </Text>
              <TextInput
                style={styles.inputField}
                placeholder='Confirm Password'
                placeholderTextColor='#999'
                secureTextEntry={true}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
            </View>

            {/* Register Button */}
            <TouchableOpacity
              onPress={handleRegister}
              style={styles.registerButton}>
              <Text style={styles.registerButtonText}>Register</Text>
            </TouchableOpacity>

            {/* Login Navigation */}
            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
              style={styles.loginLink}>
              <Text style={styles.loginLinkText}>
                Already have an account?{' '}
                <Text style={styles.loginLinkBold}>Login</Text>
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topBox: {
    backgroundColor: '#171449',
    height: height * 0.5,
  },
  logo: {
    position: 'absolute',
    top: height * 0.1,
    width: 120,
    height: 60,
    alignSelf: 'center',
  },
  card: {
    position: 'absolute',
    top: height * 0.2,
    alignSelf: 'center',
    width: width * 0.9,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  loginText: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 20,
    color: '#171449',
    fontFamily: 'Switzer-Bold',
  },
  inputContainer: {
    marginBottom: 10,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  inputIcon: {
    fontSize: 18,
    marginRight: 8,
  },
  inputField: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    // paddingVertical: 5,
  },

  otpButton: {
    marginTop: 10,
    // backgroundColor: '#171449',

    paddingVertical: 6,
    borderRadius: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#171449',
    width: '70%',
    alignSelf: 'center',
    // color: '#171449',
  },
  otpButtonText: {
    color: '#171449',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerButton: {
    marginTop: 10,
    // backgroundColor: '#171449',

    paddingVertical: 6,
    borderRadius: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#171449',
    width: '100%',
    alignSelf: 'center',
  },
  registerButtonText: {
    color: '#171449',
    fontSize: 16,
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
  loaderContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  loadingText: {
    marginTop: 10,
    color: '#171449',
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
})

export default RegistrationPage
