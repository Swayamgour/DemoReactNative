import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {View, Text} from 'react-native'

function RewordPage () {
  return (
    <>
      <Navbar />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            width: '80%',
            padding: 20,
            backgroundColor: '#f0f0f0',
            borderRadius: 10,
          }}>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 24, color: '#171449'}}>Reword Page</Text>
            <Text style={{fontSize: 18, color: '#555', marginTop: 10}}>
              This is where you can view your rewards.
            </Text>
          </View>
        </View>
      </View>
      
    </>
  )
}

export default RewordPage
