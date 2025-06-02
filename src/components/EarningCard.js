import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const EarningCard = ({
  title,
  level,
  entryAmount,
  availableSeats,
  totalSeats = 20,
  prizes,
}) => {
  const getLevelColor = level => {
    switch (level?.toLowerCase()) {
      case 'expert':
        return {color: 'red'}
      case 'intermediate':
        return {color: '#171449'}
      case 'entry':
        return {color: 'green'}
      default:
        return {color: 'black'}
    }
  }

  const getLevelBackground = level => {
    switch (level?.toLowerCase()) {
      case 'expert':
        return {backgroundColor: 'red' }
      case 'intermediate':
        return {backgroundColor: '#171449'}
      case 'entry':
        return {backgroundColor: '#4d8723'}
      default:
        return {backgroundColor: '#ccc'} // fallback color
    }
  }

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={[styles.level, getLevelColor(level)]}>Level: {level}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.questionInfo}>
        {/* <Text style={styles.ClickHere}>Click Here to Start Your Text</Text> */}
        {/* <View style={styles.clickHereWrapper}>
          <Text style={styles.clickHereText}>
            Click Here to Start Your Text
          </Text>
        </View> */}
        <View style={[styles.clickHereQuestion, getLevelBackground(level)]}>
          <Text style={styles.infoText}>20 objective Questions 20 minutes</Text>
        </View>
      </View>

      <View style={styles.entryInfo}>
        <Text style={styles.boldText}>Prize : {entryAmount}</Text>
        <View style={styles.seatInfo}>
          <Text style={styles.boldText}>Available Seats :</Text>
          <Text style={styles.availableSeats}>{availableSeats}</Text>
          <Text style={styles.outOf}> out of </Text>
          <Text style={styles.boldText}>{totalSeats}</Text>
        </View>
      </View>
    </View>
  )
}

export default EarningCard

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    // paddingTop: 8,
    // paddingLeft: 8,
    // paddingRight: 8,
    // paddingBottom: 0,
    marginVertical: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
    paddingBottom: 6,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    // fontStyle: 'italic',
  },
  level: {
    fontSize: 14,
    // color: 'green',
  },
  questionInfo: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 16,
  },

  clickHereWrapper: {
    alignSelf: 'center',
    paddingVertical: 2,
    paddingHorizontal: 6,
    backgroundColor: '#fff',
    borderRadius: 5,

    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,

    // Shadow for Android
    elevation: 4,
  },

  clickHereText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#873e23',
    textAlign: 'center',
  },

  clickHereQuestion: {
    alignSelf: 'center',
    paddingVertical: 2,
    paddingHorizontal: 6,
    marginTop: 4,
    backgroundColor: '#4d8723',
    // borderRadius: 5,
  },

  infoText: {
    fontSize: 10,
    color: '#fff',
  },
  prizeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  prizeColumn: {
    alignItems: 'center',
    flex: 1,
  },
  positionText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#222',
  },
  valueText: {
    fontSize: 13,
    color: '#555',
    marginTop: 4,
  },
  entryInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 14,
    borderRadius: 8,
    paddingVertical: 8,
  },
  boldText: {
    fontWeight: 'bold',
    color: '#222',
    fontSize: 12,
    // fontStyle: 'italic',
  },

  outOf: {
    // fontWeight: 'bold',
    color: 'gray',
    fontSize: 8,
    marginHorizontal: 4,
  },

  availableSeats: {
    fontWeight: 'bold',
    color: 'red',
    fontSize: 10,
    backgroundColor: 'white',
    paddingHorizontal: 3,
  },

  seatInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})
