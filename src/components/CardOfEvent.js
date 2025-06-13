import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import EarningCard from './EarningCard'
// import {ScrollView} from 'react-native-gesture-handler'
import {ScrollView} from 'react-native'
import SubCard from './SubCard'
// import EarningCard from './EarningCard'
// import image from '../../src/assets/home'

// Usage example
const CardOfEvent = () => {
  const cardsData = [
    {
      title: 'English',
      level: 'Entry',
      entryAmount: '10 Rs.',
      availableSeats: 5,
      prizes: ['Dynamic Data1', 'Dynamic Data2', 'Dynamic Data3'],
      image: '../../src/assets/home/gk.jpeg',
    },
    {
      title: 'History',
      level: 'Intermediate',
      entryAmount: '20 Rs.',
      availableSeats: 11,
      prizes: ['Dynamic Data1', 'Dynamic Data2', 'Dynamic Data3'],
      image: '../../src/assets/home/gk.jpeg',
    },
    {
      title: 'Mathematics',
      level: 'Expert',
      entryAmount: '30Rs.',
      availableSeats: 2,
      prizes: ['Dynamic Data1', 'Dynamic Data2', 'Dynamic Data3'],
      image: '../../src/assets/home/gk.jpeg',
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
    <ScrollView
      contentContainerStyle={{paddingHorizontal: 15, paddingVertical: 0}}
      style={{backgroundColor: '#F5F5F5'}}>
      {cardsData.map((card, index) => (
        // <View>
          <SubCard
            key={index}
            index={index}
            title={card.title}
            level={card.level}
            entryAmount={card.entryAmount}
            availableSeats={card.availableSeats}
            prizes={card.prizes}
            image={card.image}
          />
        // </View>
        // <EarningCard
        //   key={index}
        //   index={index}
        //   title={card.title}
        //   level={card.level}
        //   entryAmount={card.entryAmount}
        //   availableSeats={card.availableSeats}
        //   prizes={card.prizes}
        // />
      ))}
    </ScrollView>
  )
}

export default CardOfEvent
