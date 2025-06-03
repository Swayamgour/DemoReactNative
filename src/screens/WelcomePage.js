import React, {useEffect, useState} from 'react'
import {
  View,
  // Text,
  Image,
  Button,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
} from 'react-native'
import Text from '../components/CustomText' // Custom Text component for consistent styling
import AsyncStorage from '@react-native-async-storage/async-storage'

const WelcomePage = ({navigation}) => {
  const [loading, setLoading] = useState(false)

  // const token = AsyncStorage.getItem('authToken')
  // console.log('Token:', token)

  // const handleNext = () => {
  //   if (storeToken) {
  //     navigation.reset({
  //       index: 0,
  //       routes: [{name: 'DrawerNavigation'}],
  //     })
  //   } else {
  //     navigation.navigate('Login')
  //   }
  // }

  const handleNext = async () => {
    // navigation.navigate('Login')
    setLoading(true)

    try {
      const token = await AsyncStorage.getItem('authToken')
      // setTimeout(() => {
      if (token) {
        console.log('home')
        // navigation.navigate('Home') // token exists → go to Home
        navigation.reset({
          index: 0,
          routes: [{name: 'DrawerNavigation'}],
        })
      } else {
        console.log('login')

        navigation.navigate('Login') // no token → go to Login
      }
      // }, 500) // optional splash delay
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <ImageBackground
      source={require('../assets/background.png')} // 🔁 Replace with your background image path
      style={styles.background}
      resizeMode='cover'>
      <StatusBar barStyle='light-content' />
      <View style={styles.overlay}>
        {/* Logo */}
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
          resizeMode='contain'
        />

        {/* Text Content */}
        <View style={styles.textContainer}>
          {/* <Text style={styles.heading}>Welcome to the Quiz App!</Text> */}
          <Text style={styles.subText}>Boost your knowledge every day.</Text>
          <Text style={styles.subText}>Answer interesting questions.</Text>
          <Text style={styles.subText}>Track your progress over time.</Text>
          <Text style={styles.subText}>Let’s get started on your journey!</Text>
        </View>

        {/* Center Image */}
        <Image
          source={require('../assets/welcome_logo.png')} // 🔁 Replace with another image if needed
          style={styles.welcomeImage}
          resizeMode='contain'
        />

        {/* Next Button */}
        {/* {loading ? (
          <View style={{}}>
            <Text style={{color: '#fff'}}>Loading...</Text>
            <ActivityIndicator size='large' color='#fff' />
          </View>
        ) : ( */}
        <View style={styles.buttonContainer}>
          {loading ? (
            <TouchableOpacity
              style={styles.NextBtn}
              title='Next'
              // onPress={handleNext}
              >
              <Text style={styles.NextBtnFont}>Loading...</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.NextBtn}
              title='Next'
              onPress={handleNext}>
              <Text style={styles.NextBtnFont}>Next</Text>
            </TouchableOpacity>
          )}
        </View>
        {/* )} */}
        {/* )} */}
      </View>
    </ImageBackground>
  )
}

export default WelcomePage

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#171449', // Optional overlay for readability
    justifyContent: 'space-between',
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    textAlign: 'center',
    // marginVertical: 0,
    color: 'white', // Text color for better visibility
  },
  welcomeImage: {
    width: '100%',
    height: 200,
    marginVertical: 20,
  },
  buttonContainer: {
    marginBottom: 80,
    alignSelf: 'center',
    width: '90%',
    // backgroundColor: '#1976D2', // Button background color
    borderRadius: 25, // Rounded corners for the button
  },
  NextBtn: {
    // backgroundColor: 'white',
    // borderRadius: 25,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50, // Height of the button
    color: '#1976D2', // Text color
    fontSize: 18, // Font size for the button text
    fontWeight: 'bold', // Bold text for the button
    // textAlign: 'center', // Center the text
    borderRadius: 25, // Rounded corners for the button
    // color: '#17144', // Text color for better visibility
    borderWidth: 1,
    borderColor: 'white', // Border color for the button
  },
  NextBtnFont: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
})
