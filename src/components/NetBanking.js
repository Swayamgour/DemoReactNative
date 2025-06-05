// import React from "react";

// function NetBanking() {
//   return <div>NetBanking</div>;
// }

// export default NetBanking;

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
  {
    id: '3',
    name: 'State Bank of...',
    image: require('../assets/image/state.webp'),
  },
  {id: '4', name: 'ICICI Bank', image: require('../assets/image/icici.png')},
  {id: '5', name: 'Kotak Mahin..', image: require('../assets/image/kotak.png')},
  {id: '6', name: 'Axis Bank', image: require('../assets/image/axis.png')},
  //   {id: '2', name: 'Google Pay', image: require('../assets/image/phone.webp')},
  //   {id: '1', name: 'PhonePe', image: require('../assets/image/gpay.webp')},
  // Add more if needed
]

const NetBanking = () => {
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
        <Text style={styles.label}>NET BANKING</Text>
        <Text style={styles.label}>View All</Text>
      </View>

      <FlatList
        data={displayedApps}
        renderItem={renderApp}
        keyExtractor={item => item.id}
        numColumns={4}
        contentContainerStyle={styles.appList}
        scrollEnabled={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  paymentCup: {
    // backgroundColor: '#f5f5f5',
    // padding: 16,
    borderRadius: 12,
    // margin: 16,
  },
  debitCardCon: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    // justifyContent: 'space-between',
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

export default NetBanking
