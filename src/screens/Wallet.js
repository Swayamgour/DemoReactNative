import React, {useState} from 'react'
import {
  View,
  Text,
  // ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  LayoutAnimation,
  UIManager,
  Platform,
  Dimensions,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import OfferDetailsModal from '../components/OfferDetailsModal'
import CuponCard from '../components/CuponCard'
import {useNavigation} from '@react-navigation/native'

// Enable LayoutAnimation on Android
// if (
//   Platform.OS === 'android' &&
//   UIManager.setLayoutAnimationEnabledExperimental
// ) {
//   UIManager.setLayoutAnimationEnabledExperimental(true)
// }

if (Platform.OS === 'android') {
  if (UIManager.unstable_enableLayoutAnimations) {
    UIManager.unstable_enableLayoutAnimations(true); // New Architecture
  } else if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true); // Old Architecture
  }
}


const Wallet = () => {
  const navigate = useNavigation()
  const [amount, setAmount] = useState('20')
  const [selectedOffer, setSelectedOffer] = useState(1)
  const [showDetails, setShowDetails] = useState(false)
  const [showDetailOFCurrent, setShowDetailOFCurrent] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)

  const depositAmount = parseFloat(amount) || 0
  const tax = depositAmount * 0.28
  const total = depositAmount + tax

  const paymentOffers = [
    {id: 1, title: 'CRED UP!', description: 'Flat ₹ 10 Cashback'},
    {id: 2, title: 'PAYTM', description: 'Get 5% Cashback'},
    {id: 3, title: 'GOOGLE PAY', description: 'Extra 100 Points'},
    {id: 4, title: 'PHONEPE', description: 'Free ₹50 Voucher'},
  ]

  const toggleDropdown = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    setShowDetails(!showDetails)
  }

  const toggleDetails = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    setShowDetailOFCurrent(!showDetailOFCurrent)
  }

  return (
    <View style={styles.container}>
      <View style={{paddingHorizontal: 16}}>
        <View style={styles.card}>
          <TouchableOpacity
            style={styles.headerOFCard}
            onPress={toggleDropdown}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.cardTitle}>Current Balance</Text>
              <Icon
                name={showDetails ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                size={24}
                color='#171449'
                style={{marginLeft: 4}}
              />
            </View>
            <Text style={styles.valueOfCurrent}>₹ 9</Text>
          </TouchableOpacity>

          {showDetails && (
            <>
              <View style={styles.row}>
                <Text style={styles.label}>Amount Unutilised</Text>
                <Text style={styles.valueOfCurrent}>₹ 1,250.00</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Winnings</Text>
                <Text style={styles.valueOfCurrent}>₹ 3,420.00</Text>
              </View>
            </>
          )}
        </View>

        <View style={styles.cardAmount}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={styles.amountContainer}>
              <Text style={styles.cardTitle}>Amount to add</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.currency}>₹</Text>
                <TextInput
                  style={styles.amountInput}
                  value={amount}
                  onChangeText={setAmount}
                  keyboardType='numeric'
                  placeholder='0'
                  autoFocus
                />
              </View>
            </View>

            <View style={styles.quickAmounts}>
              {[20, 50].map(value => (
                <TouchableOpacity
                  key={value}
                  style={[
                    styles.amountBtn,
                    parseFloat(amount) === value && styles.selectedAmountBtn,
                  ]}
                  onPress={() => setAmount(value.toString())}>
                  <Text
                    style={[
                      styles.amountBtnText,
                      parseFloat(amount) === value && styles.selectedAmountText,
                    ]}>
                    ₹ {value}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        <View style={styles.cardAddToCurrent}>
          <TouchableOpacity
            onPress={toggleDetails}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 10,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 14}}>
              Added to Current Balance
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontWeight: 'bold', fontSize: 14}}>₹ 100</Text>
              <Icon
                name={
                  showDetailOFCurrent
                    ? 'keyboard-arrow-up'
                    : 'keyboard-arrow-down'
                }
                size={24}
                color='#171449'
                style={{marginLeft: 4}}
              />
            </View>
          </TouchableOpacity>

          {showDetailOFCurrent && (
            <>
              <View style={styles.divider} />
              <View style={styles.row}>
                <Text style={styles.label}>
                  Deposit Amount (excl. Govt. Tax)
                </Text>
                <Text style={styles.value}>₹ {depositAmount.toFixed(2)}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Govt. Tax (28% GST)</Text>
                <Text style={styles.value}>₹ {tax.toFixed(2)}</Text>
              </View>
              <View style={styles.divider} />
              <View style={styles.row}>
                <Text style={[styles.label, styles.totalLabel]}>Total</Text>
                <Text style={[styles.value, styles.totalValue]}>
                  ₹ {total.toFixed(2)}
                </Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Discount Points Worth</Text>
                <Text style={styles.discountPoints}>₹ 10.00</Text>
              </View>
            </>
          )}
        </View>
        <CuponCard />
      </View>

      <View style={styles.ButtonContainer}>
        <Icon
          name={'security'}
          size={24}
          color='#171449'
          style={styles.securityIcon}
        />
        <Text style={styles.VerifyTest}>
          Proceed to Verify your details and join the contest
        </Text>
        <TouchableOpacity
          onPress={() => navigate.navigate('AddCash')}
          style={styles.primaryButton}>
          <Text style={styles.buttonText}>VERIFY TO ADD ₹ {amount}</Text>
        </TouchableOpacity>
      </View>
      {/* {console.log(modalVisible)}
      <OfferDetailsModal
        modalVisible={modalVisible}
        onClose={() => setModalVisible(false)}
      /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
    justifyContent: 'space-between',
  },
  card: {
    borderRadius: 10,
    padding: 1,
    marginBottom: 1,
  },
  cardAmount: {
    paddingBottom: 1,
  },
  headerOFCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  valueOfCurrent: {
    fontSize: 14,
    fontWeight: '700',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1E232C',
  },
  value: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1E232C',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  label: {
    fontSize: 12,
    color: '#6A6A6A',
  },
  amountContainer: {
    borderWidth: 1,
    borderColor: '#90EE90',
    width: '48%',
    borderRadius: 10,
    padding: 6,
    marginBottom: 20,
  },
  currency: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1E232C',
    marginRight: 2,
  },
  amountInput: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1E232C',
    flex: 1,
  },
  quickAmounts: {
    flexDirection: 'row',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  amountBtn: {
    backgroundColor: '#EDF1FF',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  selectedAmountBtn: {
    backgroundColor: '#171449',
  },
  amountBtnText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4A6CF7',
  },
  selectedAmountText: {
    color: '#FFFFFF',
  },
  cardAddToCurrent: {
    borderWidth: 1,
    borderColor: '#9090EE',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  divider: {
    height: 1,
    backgroundColor: '#EEE',
    marginVertical: 12,
  },
  totalLabel: {
    fontWeight: '700',
  },
  totalValue: {
    fontSize: 12,
    fontWeight: '800',
    color: '#4A6CF7',
  },
  discountPoints: {
    color: '#27AE60',
    fontWeight: '700',
  },
  primaryButton: {
    backgroundColor: '#19A519',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 24,
    shadowColor: '#4A6CF7',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
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
    backgroundColor: '#ffefd5',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
  offerTitle: {
    fontWeight: 'bold',
    fontSize: 16,
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
  VerifyTest: {
    fontSize: 14,
    paddingVertical: 12,
  },
  securityIcon: {
    position: 'absolute',
    top: -10,
    left: 40,
  },
})

export default Wallet
