import React from 'react'

import {View, Text} from 'react-native'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Profile () {
  return (
    <>
      <Navbar />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 24, color: '#171449'}}>Profile Screen</Text>
      </View>
      
    </>
  )
}
