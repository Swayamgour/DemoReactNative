import React, {useState} from 'react'
import CuponCard from './CuponCard'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native'
import PaymentUPI from './PaymentUPI'
import NetBanking from './NetBanking'
// import {Text} from 'react-native-gesture-handler'

function AddCash () {
  // useState
  const [showInputs, setShowInputs] = useState(false)
  const [cardNumber, setCardNumber] = useState('')
  const [name, setName] = useState('')
  const [expiry, setExpiry] = useState('')

  const handlePay = () => {
    // Handle pay logic here
    console.log('Pay with:', {cardNumber, name, expiry})
  }

  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <Text style={styles.text}>Add ₹ 20</Text>
      </View>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 40}}
        keyboardShouldPersistTaps='handled'
        showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <View style={styles.paymentCup}>
            <CuponCard />
          </View>
          <View style={styles.paymentCup}>
            <Text style={styles.PREFERRED}>PREFERRED PAYMENT</Text>

            <View style={styles.container}>
              {/* Left Section */}
              <View style={styles.leftSection}>
                <Image
                  source={require('../assets/image/gpay.webp')}
                  style={styles.image}
                  resizeMode='contain'
                />

                {/* Row Texts */}
                <View style={styles.rowTextContainer}>
                  <Text style={styles.rowText}>UPI </Text>
                  <Text style={styles.rowTextGoogle}>Google Pay</Text>
                </View>
              </View>

              {/* Right Section */}
              <View style={styles.rightSection}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Add ₹ 20</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* <hr /> */}
            <View style={styles.divider}></View>

            <View style={styles.container}>
              {/* Left Section */}
              <View style={styles.leftSection}>
                <Image
                  source={require('../assets/image/phone.webp')}
                  style={styles.image}
                  resizeMode='contain'
                />

                {/* Row Texts */}
                <View style={styles.rowTextContainer}>
                  <Text style={styles.rowText}>UPI </Text>
                  <Text style={styles.rowTextGoogle}>Phone Pay</Text>
                </View>
              </View>

              {/* Right Section */}
              <View style={styles.rightSection}>
                <TouchableOpacity style={styles.selectButton}>
                  <Text style={styles.selectButtonText}>Add ₹ 20</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.paymentCup}>
            <View style={styles.debitCardCon}>
              <Text style={styles.label}>DEBIT/CREDIT CARDS</Text>
              <TouchableOpacity onPress={() => setShowInputs(!showInputs)}>
                <Text style={styles.addBtn}>{showInputs ? 'Hide' : 'ADD'}</Text>
              </TouchableOpacity>
            </View>

            {showInputs && (
              <View style={styles.inputSection}>
                <TextInput
                  style={styles.input}
                  placeholder='Card Number'
                  keyboardType='number-pad'
                  value={cardNumber}
                  onChangeText={setCardNumber}
                />
                <View>
                  <TextInput
                    style={styles.input}
                    placeholder='Name'
                    value={name}
                    onChangeText={setName}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder='Expiry (MM/YY)'
                    value={expiry}
                    onChangeText={setExpiry}
                  />
                </View>
                <TouchableOpacity
                  style={styles.payButton}
                  disabled={!showInputs}
                  onPress={handlePay}>
                  <Text style={styles.payText}>PAY</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>

          <View style={styles.paymentCup}>
            <PaymentUPI />
          </View>

          <View style={styles.paymentCup}>
            <Text style={styles.PREFERRED}>WALLETS</Text>

            <View style={styles.container}>
              {/* Left Section */}
              <View style={styles.leftSection}>
                <Image
                  source={require('../assets/image/amazon.webp')}
                  style={styles.image}
                  resizeMode='contain'
                />

                {/* Row Texts */}
                <View style={styles.rowTextContainer}>
                  <Text style={styles.rowText}>Wallet </Text>
                  <Text style={styles.rowTextGoogle}>Amazon Pay</Text>
                </View>
              </View>

              {/* Right Section */}
              <View style={styles.rightSection}>
                <TouchableOpacity>
                  <Text style={styles.addBtn}>{'LINK'}</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* <hr /> */}
            <View style={styles.divider}></View>

            <View style={styles.container}>
              {/* Left Section */}
              <View style={styles.leftSection}>
                <Image
                  source={require('../assets/image/mobikwik.webp')}
                  style={styles.image}
                  resizeMode='contain'
                />

                {/* Row Texts */}
                <View style={styles.rowTextContainer}>
                  <Text style={styles.rowText}>Wallet </Text>
                  <Text style={styles.rowTextGoogle}>Mobikwik</Text>
                </View>
              </View>

              {/* Right Section */}
              <View style={styles.rightSection}>
                <TouchableOpacity>
                  <Text style={styles.addBtn}>{'LINK'}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.paymentCup}>
            <NetBanking />
          </View>

          <View style={{paddingVertical: 20}}>
            <Text style={{textAlign: 'center', color: '#EDEADE'}}>
              Earning with Learning
            </Text>
            <Text style={{textAlign: 'center', color: '#EDEADE'}}>
              100% Secure Transaction
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default AddCash

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    // padding:10,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: '700',
  },

  card: {
    paddingHorizontal: 15,
  },

  paymentCup: {
    // color: '#171449',

    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  PREFERRED: {
    fontSize: 12,
    fontWeight: '700',
    color: '#6A6A6A',
    marginBottom: 16,
  },
  container: {
    flexDirection: 'row',
    // padding: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftSection: {
    flexDirection: 'row',
    flex: 1,
    gap: 10,
    alignItems: 'center',
    // marginRight: 10,
  },
  image: {
    width: 50,
    height: 50,
    // marginBottom: 10,
    borderRadius: 8,
    // backgroundColor: '#ccc',
  },
  rowTextContainer: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    marginBottom: 10,
  },
  rowText: {
    fontSize: 14,
    // marginRight: 10,
    color: '#333',
  },
  rowTextGoogle: {
    fontSize: 14,
    // marginRight: 10,
    // color: '#333',
    fontWeight: 500,
  },
  columnTextContainer: {
    flexDirection: 'column',
  },
  columnText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  rightSection: {
    justifyContent: 'center',
  },
  selectButton: {
    // backgroundColor: '#19A519',
    backgroundColor: '#19A519',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  button: {
    // backgroundColor: '#19A519',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#EDEADE',
  },

  selectButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },

  buttonText: {
    color: '#19A519',
    fontWeight: '600',
    fontSize: 16,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#EDEADE',
    marginVertical: 10,
  },
  //   paymentCup: {
  //     padding: 16,
  //     backgroundColor: '#fff',
  //     borderRadius: 12,
  //     elevation: 3,
  //     margin: 16,
  //   },
  debitCardCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
    fontWeight: '700',
    color: '#6A6A6A',
    // marginBottom: 16,
  },
  addBtn: {
    color: '#4a6cf7',
    fontWeight: '700',
    fontSize: 14,
  },
  inputSection: {
    marginTop: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
    marginBottom: 15,
    fontSize: 16,
  },
  payButton: {
    backgroundColor: '#4a6cf7',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  payText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
})
