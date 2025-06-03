// src/screens/Dashboard.js
import React, {useEffect, useRef} from 'react'
import {BackHandler, ToastAndroid, StyleSheet, View} from 'react-native'
import {useFocusEffect} from '@react-navigation/native'
// import {} from 'react-native'
import Navbar from '../components/Navbar'
import SwiperImage from '../components/SwiperImage'
import CardOfEvent from '../components/CardOfEvent'
import Footer from '../components/Footer'
import AppTabs from './AppTabs'

function Dashboard () {
  const backPressedOnce = useRef(false)

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

  return (
    <>
      <Navbar />
      <SwiperImage />
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <CardOfEvent />
      </View>
      {/* <CardOfEvent /> */}
    </>
  )
}

export default Dashboard
