// import React from 'react'

import React, {useState} from 'react'
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'

// if (
//   Platform.OS === 'android' &&
//   UIManager.setLayoutAnimationEnabledExperimental
// ) {
//   UIManager.setLayoutAnimationEnabledExperimental(true)
// }

function CuponCard () {
  const [selectedOffer, setSelectedOffer] = useState(1)

  const paymentOffers = [
    {id: 1, title: 'CRED UP!', description: 'Flat ₹ 10 Cashback'},
    {id: 2, title: 'PAYTM', description: 'Get 5% Cashback'},
    {id: 3, title: 'GOOGLE PAY', description: 'Extra 100 Points'},
    {id: 4, title: 'PHONEPE', description: 'Free ₹50 Voucher'},
  ]

  return (
    <>
      <View style={styles.paymentOffers}>
        <Text style={styles.sectionHeader}>
          PAYMENT OFFERS ({paymentOffers.length})
        </Text>
        <Text style={styles.sectionHeader}>View all</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 1}}>
        {paymentOffers.map(offer => (
          <TouchableOpacity
            key={offer.id}
            style={[
              styles.offerCard,
              selectedOffer === offer.id && styles.offerCardSelected,
            ]}
            // onPress={() => setSelectedOffer(offer.id)}
            onClose={() => setModalVisible(true)}>
            <View style={styles.cutLeft} />
            <View style={styles.offerContent}>
              <View style={styles.offerBadge}>
                <Text style={styles.offerTitle}>{offer.title}</Text>
              </View>
              <Text style={styles.offerDesc}>{offer.description}</Text>
            </View>
            <View style={styles.cutRight} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  paymentOffers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  sectionHeader: {
    fontSize: 12,
    fontWeight: '700',
    color: '#6A6A6A',
    marginBottom: 16,
  },
  offerCard: {
    width: 180,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginRight: 16,
    padding: 16,
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#90EE90',
  },
  offerCardSelected: {
    borderColor: '#90EE90',
  },
  offerContent: {
    flex: 1,
    paddingHorizontal: 10,
  },
  offerBadge: {
    // backgroundColor: '#ffefd5',
    paddingVertical: 0,
    paddingHorizontal: 8,
    borderRadius: 6,
    // marginBottom: 8,
    alignSelf: 'flex-start',
    fontSize:12
  },
  offerTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#ff6600',
  },
  offerDesc: {
    fontSize: 13,
    color: '#444',
  },
  cutLeft: {
    position: 'absolute',
    left: -10,
    top: '55%',
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
  },
  cutRight: {
    position: 'absolute',
    right: -10,
    top: '55%',
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
  },
  ButtonContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 10,
    position: 'relative',
  },
})

export default CuponCard
