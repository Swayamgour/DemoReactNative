// src/screens/Dashboard.js
import React, {useEffect, useRef} from 'react'
import {BackHandler, ToastAndroid, StyleSheet, View} from 'react-native'
import {useFocusEffect} from '@react-navigation/native'
import Navbar from '../components/Navbar'
import SwiperImage from '../components/SwiperImage'
import CardOfEvent from '../components/CardOfEvent'
import * as Animatable from 'react-native-animatable'
import FilterTab from '../components/FilterTab'

function Dashboard () {
  return (
    <>
      <Navbar />
      <SwiperImage />
      <Animatable.View
        animation='fadeInUp'
        duration={800}
        delay={500}
        style={{flex: 1, backgroundColor: '#fff'}}>
        <FilterTab />

        <CardOfEvent />
      </Animatable.View>
      {/* <CardOfEvent /> */}
    </>
  )
}

export default Dashboard

// const backPressedOnce = useRef(false)

// useFocusEffect(
//   React.useCallback(() => {
//     const onBackPress = () => {
//       if (backPressedOnce.current) {
//         BackHandler.exitApp()
//         return true
//       }

//       backPressedOnce.current = true
//       ToastAndroid.show('Press back again to exit', ToastAndroid.SHORT)

//       setTimeout(() => {
//         backPressedOnce.current = false
//       }, 2000)

//       return true
//     }

//     BackHandler.addEventListener('hardwareBackPress', onBackPress)

//     return () =>
//       BackHandler.removeEventListener('hardwareBackPress', onBackPress)
//   }, []),
// )
