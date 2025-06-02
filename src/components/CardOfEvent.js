import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import EarningCard from './EarningCard'
// import {ScrollView} from 'react-native-gesture-handler'
import {ScrollView} from 'react-native'
// import EarningCard from './EarningCard'

// Usage example
const CardOfEvent = () => {
  const cardsData = [
    {
      title: 'English',
      level: 'Entry',
      entryAmount: '10 Rs.',
      availableSeats: 5,
      prizes: ['Dynamic Data1', 'Dynamic Data2', 'Dynamic Data3'],
    },
    {
      title: 'History',
      level: 'Intermediate',
      entryAmount: '20 Rs.',
      availableSeats: 11,
      prizes: ['Dynamic Data1', 'Dynamic Data2', 'Dynamic Data3'],
    },
    {
      title: 'Mathematics',
      level: 'Expert',
      entryAmount: '30Rs.',
      availableSeats: 2,
      prizes: ['Dynamic Data1', 'Dynamic Data2', 'Dynamic Data3'],
    },
    {
      title: 'English',
      level: 'Entry',
      entryAmount: '10 Rs.',
      availableSeats: 5,
      prizes: ['Dynamic Data1', 'Dynamic Data2', 'Dynamic Data3'],
    },
    {
      title: 'History',
      level: 'Intermediate',
      entryAmount: '20 Rs.',
      availableSeats: 11,
      prizes: ['Dynamic Data1', 'Dynamic Data2', 'Dynamic Data3'],
    },
    {
      title: 'Mathematics',
      level: 'Expert',
      entryAmount: '30Rs.',
      availableSeats: 2,
      prizes: ['Dynamic Data1', 'Dynamic Data2', 'Dynamic Data3'],
    },
  ]

  return (
   

    <ScrollView contentContainerStyle={{paddingHorizontal: 16, paddingVertical: 0}} style={{backgroundColor: '#F5F5F5'}}>
      {cardsData.map((card, index) => (
        <EarningCard
          key={index}
          title={card.title}
          level={card.level}
          entryAmount={card.entryAmount}
          availableSeats={card.availableSeats}
          prizes={card.prizes}
        />
      ))}
    </ScrollView>
  )
}

export default CardOfEvent
