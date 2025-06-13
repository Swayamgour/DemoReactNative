import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'

const InfoCard = ({ index }) => {
  const getCardColor = index => {
    const colors = [
      '#00FF00', // Light green
      '#FF8096', // Light pink
      'yellow',  // Light yellow
    ]
    return colors[index % colors.length]
  }

  return (
    <View style={styles.container}>
      <View style={[styles.card, { backgroundColor: '#E6F7ED' }]}>
        <View style={styles.contentContainer}>
          {/* Left side - Image */}
          <View style={styles.imageContainer}>
            <Image
              source={require('../../src/assets/home/gk.jpeg')}
              style={styles.image}
              resizeMode='contain'
            />
          </View>

          {/* Right side - Content */}
          <View style={styles.textContainer}>
            <View
              style={[styles.subCard, { backgroundColor: getCardColor(index) }]}>
              <Text style={styles.title}>GK</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Level</Text>
              <View style={styles.labelOfNum}>
                <Text style={styles.valueOFLabel}>1</Text>
                <Text style={styles.valueOFLabel}>2</Text>
                <Text style={styles.valueOFLabel}>3</Text>
              </View>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Total Question</Text>
              <Text style={styles.value}>20</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Time</Text>
              <Text style={styles.value}>5 Min</Text>
            </View>
          </View>

          <View style={styles.WinnerCointainer}>
            <Image
              source={require('../../src/assets/home/prize-01.png')}
              style={styles.winner}
              resizeMode='contain'
            />
          </View>
        </View>
      </View>
    </View>
  )
}

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  card: {
    borderRadius: 12,
    padding: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 10,
  },
  subCard: {
    alignSelf: 'flex-start',
    borderRadius: 5,
    paddingVertical: 2,
    paddingHorizontal: 10,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageContainer: {
    marginRight: 15,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 14,
  },
  textContainer: {
    width: 160,
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#171449',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 3,
  },
  label: {
    fontSize: 12,
    color: '#555555',
    fontWeight: '500',
  },
  labelOfNum: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  value: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#171449',
  },
  valueOFLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    backgroundColor: '#171449',
    marginLeft: 7,
    color: '#fff',
    paddingHorizontal: 6,
    borderRadius: 5,
  },
  WinnerCointainer: {
    marginRight: 10,
  },
  winner: {
    width: 60,
  },
})

export default InfoCard
