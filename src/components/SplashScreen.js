import React, {useEffect} from 'react'
import {View, StyleSheet} from 'react-native'
import FastImage from 'react-native-fast-image'

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    // Simulate loading time, then navigate
    const timeout = setTimeout(() => {
      navigation.replace('Welcome') // or your main screen
    }, 4000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <View style={styles.container}>
      <FastImage
        source={require('../assets/image/gif.gif')} // put your gif in assets folder
        style={styles.gif}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // match background with gif if needed
    justifyContent: 'center',
    alignItems: 'center',
  },
  gif: {
    width: 300,
    height: 300,
  },
})
