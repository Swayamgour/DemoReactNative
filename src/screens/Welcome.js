import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Welcome = ({ navigation }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace('Login') // Replace with your navigation target
    }, 3000)

    return () => clearTimeout(timeout)
  }, [navigation])

  return (
    <LinearGradient
      colors={['#171449', '#3F4C77']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
    >
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </LinearGradient>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 250,
    height: 250,
    alignSelf: 'center',
  },
})
