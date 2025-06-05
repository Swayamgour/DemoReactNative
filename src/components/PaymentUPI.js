import React, {useState} from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native'

const upiApps = [
  {id: '3', name: 'Paytm', image: require('../assets/image/paytm1.png')},
  {id: '4', name: 'Amazon Pay', image: require('../assets/image/amazon.png')},
  {id: '5', name: 'BHIM', image: require('../assets/image/bhim1.png')},
  {id: '6', name: 'Freecharge', image: require('../assets/image/freecharge.png')},
  {id: '2', name: 'Google Pay', image: require('../assets/image/gpay.webp')},
  {id: '1', name: 'PhonePe', image: require('../assets/image/phone2.png')},
  // Add more if needed
]

const PaymentUPI = () => {
  const [showAll, setShowAll] = useState(false)

  const displayedApps = showAll ? upiApps : upiApps.slice(0, 4)

  const renderApp = ({item}) => (
    <View style={styles.appContainer}>
      <Image source={item.image} style={styles.appImage} />
      <Text style={styles.appName}>{item.name}</Text>
    </View>
  )

  return (
    <View style={styles.paymentCup}>
      <View style={styles.debitCardCon}>
        <Text style={styles.label}>PAY BY ANY UPI APP</Text>
      </View>

      <FlatList
        data={displayedApps}
        renderItem={renderApp}
        keyExtractor={item => item.id}
        numColumns={4}
        contentContainerStyle={styles.appList}
        scrollEnabled={false} 
      />

      {upiApps.length > 4 && (
        <TouchableOpacity
          style={styles.showAllButton}
          onPress={() => setShowAll(!showAll)}>
          <Text style={styles.showAllText}>
            {showAll ? 'Hide' : 'Show More'}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  paymentCup: {
    borderRadius: 12,
  },
  debitCardCon: {
    marginBottom: 10,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6A6A6A',
  },
  appList: {
    justifyContent: 'center',
  },
  appContainer: {
    width: Dimensions.get('window').width / 4 - 15,
    alignItems: 'center',
    marginBottom: 16,
  },
  appImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginBottom: 5,
  },
  appName: {
    fontSize: 12,
    textAlign: 'center',
    color: '#333',
  },
  showAllButton: {
    marginTop: 10,
    // backgroundColor: '#4a6cf7',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#EDEADE',
  },
  showAllText: {
    // color: '#fff',
    fontSize: 14,
    fontWeight: '300',
  },
})

export default PaymentUPI
