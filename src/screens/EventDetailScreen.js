import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
// import ProgressBar from 'react-native-paper'
import { ProgressBar, MD3Colors } from 'react-native-paper';

const eventData = [
  {
    id: '1',
    type: 'Mega Contest',
    prize: '₹8.35 Lakhs',
    entryFee: '₹49',
    firstPrize: '₹1 Lakh',
    spotsLeft: 5096,
    totalSpots: 22940,
    winPercent: 59,
    upto: 20,
    trend: '₹21.71 Lakhs',
  },
  {
    id: '2',
    type: 'Grand League',
    prize: '₹5 Lakhs',
    entryFee: '₹39',
    firstPrize: '₹75K',
    spotsLeft: 3000,
    totalSpots: 10000,
    winPercent: 62,
    upto: 15,
    trend: '₹18.50 Lakhs',
  },
  {
    id: '3',
    type: 'Hot Contest',
    prize: '₹2.5 Lakhs',
    entryFee: '₹29',
    firstPrize: '₹50K',
    spotsLeft: 1500,
    totalSpots: 8000,
    winPercent: 50,
    upto: 10,
    trend: '₹12.21 Lakhs',
  },
  {
    id: '5414',
    type: 'Head-to-Head',
    prize: '₹1 Lakh',
    entryFee: '₹19',
    firstPrize: '₹1 Lakh',
    spotsLeft: 1,
    totalSpots: 2,
    winPercent: 100,
    upto: 1,
    trend: '₹1 Lakh',
  },
  {
    id: '65',
    type: 'Small League',
    prize: '₹50K',
    entryFee: '₹15',
    firstPrize: '₹10K',
    spotsLeft: 500,
    totalSpots: 2000,
    winPercent: 70,
    upto: 5,
    trend: '₹3.5 Lakhs',
  },
  {
    id: '75',
    type: 'Small League',
    prize: '₹50K',
    entryFee: '₹15',
    firstPrize: '₹10K',
    spotsLeft: 500,
    totalSpots: 2000,
    winPercent: 70,
    upto: 5,
    trend: '₹3.5 Lakhs',
  },
  {
    id: '55',
    type: 'Small League',
    prize: '₹50K',
    entryFee: '₹15',
    firstPrize: '₹10K',
    spotsLeft: 500,
    totalSpots: 2000,
    winPercent: 70,
    upto: 5,
    trend: '₹3.5 Lakhs',
  },
  {
    id: '25',
    type: 'Small League',
    prize: '₹50K',
    entryFee: '₹15',
    firstPrize: '₹10K',
    spotsLeft: 500,
    totalSpots: 2000,
    winPercent: 70,
    upto: 5,
    trend: '₹3.5 Lakhs',
  },
  {
    id: '35',
    type: 'Small League',
    prize: '₹50K',
    entryFee: '₹15',
    firstPrize: '₹10K',
    spotsLeft: 500,
    totalSpots: 2000,
    winPercent: 70,
    upto: 5,
    trend: '₹3.5 Lakhs',
  },
]

const EventDetailCard = ({data}) => {
  const progress = (data.totalSpots - data.spotsLeft) / data.totalSpots

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.headerRow}>
          <Text style={styles.typeTag}>{data.type}</Text>
          {/* <Text style={styles.discountText}>Discount ends in 12m 54s</Text> */}
        </View>

        <View style={styles.topRow}>
          <Text style={styles.prize}>{data.prize}</Text>
          <TouchableOpacity style={styles.entryBox}>
            <Text style={styles.entryText}>{data.entryFee}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.firstPrizeRow}>
          <Text style={styles.firstPrize}>1st Prize: {data.firstPrize}</Text>
        </View>

        {/* Optional Progress Bar */}

        {/* <ProgressBar
          progress={progress}
          color='#e74c3c'
          style={styles.progress}
        /> */}

        <View style={styles.infoRow}>
          <Text style={styles.infoText}>Upto {data.upto}</Text>
          <Ionicons name='trophy-outline' size={14} color='#777' />
          <Text style={styles.infoText}>{data.winPercent}%</Text>
          <Ionicons name='trending-up-outline' size={14} color='#777' />
          <Text style={styles.infoText}>{data.trend}</Text>
        </View>
      </View>
    </View>
  )
}

const EventDetailScreen = () => {
  return (
    <FlatList
      data={eventData}
      keyExtractor={item => item.id}
      renderItem={({item}) => <EventDetailCard data={item} />}
      contentContainerStyle={{paddingBottom: 20}}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },

  card: {
    backgroundColor: '#fff',
    // marginBottom: 0,
    padding: 15,
    borderRadius: 12,
    elevation: 3,
    marginHorizontal: 15,
    // marginTop: 20,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  typeTag: {
    fontSize: 12,
    backgroundColor: '#FFEFD5',
    color: '#FF8C00',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 5,
  },
  discountText: {
    fontSize: 12,
    color: 'red',
  },
  topRow: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  prize: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  entryBox: {
    backgroundColor: '#2e7d32',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 6,
  },
  entryText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  firstPrizeRow: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  firstPrize: {
    fontSize: 14,
    color: '#333',
  },
  progress: {
    marginTop: 10,
    height: 6,
    borderRadius: 4,
    backgroundColor: '#eee',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 10,
  },
  infoText: {
    fontSize: 12,
    color: '#555',
  },
})

export default EventDetailScreen
