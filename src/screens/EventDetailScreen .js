import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const EventDetailScreen = ({ route }) => {
  const { title, level, entryAmount, availableSeats, totalSeats, prizes } = route.params

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.detail}>Level: {level}</Text>
      <Text style={styles.detail}>Entry Amount: {entryAmount}</Text>
      <Text style={styles.detail}>
        Seats: {availableSeats} / {totalSeats}
      </Text>
      {/* Render prizes or other details here */}
    </View>
  )
}

export default EventDetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detail: {
    fontSize: 16,
    marginBottom: 6,
  },
})
