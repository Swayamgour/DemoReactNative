import React from 'react'
import {View, Image, StyleSheet, Dimensions} from 'react-native'
import Swiper from 'react-native-swiper'

const {width} = Dimensions.get('window')

const SwiperImage = () => {
  return (
    <View style={styles.container}>
      <Swiper
        autoplay
        showsPagination
        dotColor='#ccc'
        activeDotColor='#171449'
        scrollEnabled={true}
        loop={true}
        autoplayTimeout={3}>
        <Image
          source={require('../assets/Swiper.png')}
          style={styles.image}
          resizeMode='cover'
        />
        <Image
          source={require('../assets/Swiper.png')}
          style={styles.image}
          resizeMode='cover'
        />
        <Image
          source={require('../assets/Swiper.png')}
          style={styles.image}
          resizeMode='cover'
        />
      </Swiper>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 170,
    // height: '100%',
    width: '100%',
  },
  image: {
    width: '95%',
    marginHorizontal: '2%',
    marginVertical: 10,
    borderRadius: 10,
  },
})

export default SwiperImage
