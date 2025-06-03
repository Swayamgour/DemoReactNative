import React, {useState} from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ScrollView,
  Dimensions,
} from 'react-native'

import {useNavigation} from '@react-navigation/native' // ✅ Import the hook
import * as Animatable from 'react-native-animatable'
import BottomDrawer from '../components/BottomDrawer'

const {width} = Dimensions.get('window')

const ChooseAmount = () => {
  const [selectedAmount, setSelectedAmount] = useState(100)
  const [customAmount, setCustomAmount] = useState('100')
  const [isVisible, setIsVisible] = useState(false)

  const navigate = useNavigation()

  const amountOptions = [
    {amount: 500, bonus: 500},
    {amount: 1000, bonus: 1500},
    {amount: 100, bonus: 50},
    {amount: 200, bonus: 150},
  ]

  const calculateBonus = amount => {
    const option = amountOptions.find(opt => opt.amount === amount)
    return option ? option.bonus : 50 // Default bonus
  }

  const handleAmountSelect = amount => {
    setSelectedAmount(amount)
    setCustomAmount(amount.toString())
  }

  const handleCustomAmountChange = text => {
    // Allow only numbers
    const cleanedText = text.replace(/[^0-9]/g, '')
    setCustomAmount(cleanedText)

    if (cleanedText) {
      const num = parseInt(cleanedText, 10)
      setSelectedAmount(num)
    }
  }

  const bonus = calculateBonus(selectedAmount)

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* <Text style={styles.title}>Choose Amount</Text> */}

          <Animatable.View
            duration={1000}
            animation='fadeInUp'
            style={styles.amountGrid}>
            {amountOptions.map(option => (
              <TouchableOpacity
                key={option.amount}
                style={[
                  styles.amountOption,
                  selectedAmount === option.amount &&
                    styles.selectedAmountOption,
                ]}
                onPress={() => handleAmountSelect(option.amount)}>
                <Text style={styles.amountText}>₹ {option.amount}</Text>
                <Text style={styles.bonusText}>
                  Get {option.bonus} Bonus Cash
                </Text>
              </TouchableOpacity>
            ))}
          </Animatable.View>

          {/* <View style={styles.divider} /> */}
          <Animatable.View duration={800} delay={500} animation='fadeInUp'>
            <Text style={styles.sectionLabel}>Enter Amount</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.currencySymbol}>₹ </Text>
              <TextInput
                style={styles.amountInput}
                value={customAmount}
                onChangeText={handleCustomAmountChange}
                keyboardType='numeric'
                placeholder='0'
              />
            </View>

            <View style={styles.bonusContainer}>
              {/* <Text style={styles.bonusLabel}></Text> */}
              <Text style={styles.bonusValue}> You get {bonus} Bonus Cash</Text>
              <Text
                onPress={() => setIsVisible(true)}
                style={styles.disclaimer}>
                Includes Deposit & GST
              </Text>
            </View>

            {/* <View style={styles.divider} /> */}

            <View style={styles.divider} />

            <Text style={styles.sectionTitle}>Offer</Text>

            <View style={styles.offerCard}>
              <View style={styles.offerRow}>
                {/* <Text style={styles.offerLabel}></Text> */}
                <Text style={styles.offerValue}>You get 50 Bonus Cash</Text>
              </View>
              <View style={styles.offerRow}>
                <Text style={styles.offerLabel}>Bonus</Text>
                <TouchableOpacity>
                  <Text style={styles.removeLink}>Remove</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Animatable.View>

          {/* <TouchableOpacity style={styles.moreOffersButton}>
          <Text style={styles.moreOffersText}>More Offers</Text>
        </TouchableOpacity> */}
        </ScrollView>

        <TouchableOpacity
          onPress={() => navigate.navigate('PaymentMethod')}
          style={styles.continueButton}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
        <BottomDrawer isVisible={isVisible} setIsVisible={setIsVisible} />
      </SafeAreaView>
    </>
  )
}

export default ChooseAmount

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fe',
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1a1a2e',
    marginBottom: 25,
    textAlign: 'center',
  },
  amountGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  amountOption: {
    width: width * 0.43,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#171449',
  },
  selectedAmountOption: {
    borderColor: '#4e54c8',
    backgroundColor: '#f0f2ff',
    borderWidth: 1,
  },
  amountText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a1a2e',
    marginBottom: 5,
  },
  bonusText: {
    fontSize: 14,
    color: '#171449',
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 20,
  },
  sectionLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a2e',
    marginBottom: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 60,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  currencySymbol: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1a1a2e',
    marginRight: 10,
  },
  amountInput: {
    flex: 1,
    fontSize: 20,
    fontWeight: '700',
    color: '#1a1a2e',
    height: '100%',
  },
  bonusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 1,
    justifyContent: 'space-between',
  },
  bonusLabel: {
    fontSize: 16,
    color: '#666',
    marginRight: 10,
  },
  bonusValue: {
    fontSize: 12,
    fontWeight: '700',
    color: '#10B981',
  },
  disclaimer: {
    fontSize: 14,
    color: '#171449',
    textAlign: 'center',
    marginVertical: 10,
    // fontStyle:'bold'
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a1a2e',
    marginBottom: 15,
  },
  offerCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  offerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  offerLabel: {
    fontSize: 16,
    color: '#666',
  },
  offerValue: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1a1a2e',
  },
  removeLink: {
    fontSize: 16,
    color: '#4e54c8',
    fontWeight: '600',
  },
  moreOffersButton: {
    paddingVertical: 15,
    alignItems: 'center',
  },
  moreOffersText: {
    fontSize: 16,
    color: '#4e54c8',
    fontWeight: '600',
  },
  continueButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#171449',
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#4e54c8',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 8,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
})
