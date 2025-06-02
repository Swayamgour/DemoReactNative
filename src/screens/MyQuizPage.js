import React from 'react'
// import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
// import {View , Text} from 'react-native-reanimated/lib/typescript/Animated'
import {View, Text} from 'react-native'

function MyQuizPage () {
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
            <Text style={{fontSize: 24, color: '#171449'}}>My Quiz Page</Text>
            <Text style={{fontSize: 18, color: '#555', marginTop: 10}}>
              This is where you can manage your quizzes.
            </Text>
          </View>
        </View>
      </View>
      
    </>
  )
}

export default MyQuizPage
