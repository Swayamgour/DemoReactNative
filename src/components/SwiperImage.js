import React from 'react'
import {View, Image, StyleSheet, Dimensions} from 'react-native'
import Swiper from 'react-native-swiper'
import * as Animatable from 'react-native-animatable'

// const {width} = Dimensions.get('window')

const SwiperImage = () => {
  return (
    <Animatable.View
      animation='fadeInUp'
      duration={1000}
      style={styles.container}>
      <Swiper
        autoplay
        showsPagination
        dotColor='#ccc'
        activeDotColor='#171449'
        scrollEnabled={true}
        loop={true}
        autoplayTimeout={3}>
        {[1, 2, 3].map((_, index) => (
          <Animatable.View
            key={index}
            animation='zoomIn'
            duration={800}
            useNativeDriver

            style={styles.slide}>
            <Image
              source={require('../assets/image/swiperImage.jpeg')}
              style={styles.image}
              resizeMode='cover'
            />
          </Animatable.View>
        ))}
      </Swiper>
    </Animatable.View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    marginVertical: 10,
    overflow: 'hidden',
    paddingHorizontal:15 
  },
  slide: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
})

export default SwiperImage
