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
import LinearGradient from 'react-native-linear-gradient'

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
        // console.log('home')
        // navigation.navigate('Home') // token exists → go to Home
        navigation.reset({
          index: 0,
          routes: [{name: 'DrawerNavigation'}],
        })
      } else {
        // console.log('login')

        navigation.navigate('Login') // no token → go to Login
      }
      // }, 500) // optional splash delay
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <LinearGradient
    // colors={['#171449', '#171449', '#6A6A85']}
    // locations={[0, 0.8, 1]} // 90% first color, 10% last color
    // start={{x: 0, y: 0}}
    // end={{x: 1, y: 0}}
    // style={styles.container}
    >
      <View style={styles.background}>
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
            <Text style={styles.subText}>
              Let’s get started on your journey!
            </Text>
          </View>

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
        </View>
      </View>
    </LinearGradient>
  )
}

export default WelcomePage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // background: '#171449',
    // background:
    //   'linear-gradient(90deg,rgba(23, 20, 73, 1) 0%, rgba(23, 20, 73, 1) 80%, rgba(106, 106, 133, 1) 100%)',
  },
  background: {
    // flex: 1,
  },
  overlay: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    // backgroundColor: '#171449', // Optional overlay for readability
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
