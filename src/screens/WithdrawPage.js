import React, {useState} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'

const {width} = Dimensions.get('window')

const WithdrawPage = () => {
  const [amount, setAmount] = useState('')
  const [selectedMethod, setSelectedMethod] = useState('upi')
  const [upiId, setUpiId] = useState('alex.morgan@upi')
  const [bankDetails, setBankDetails] = useState({
    accountNumber: '**** **** **** 1234',
    ifsc: 'ABCD0123456',
    name: 'Alex Morgan',
  })

  const withdrawalMethods = [
    {id: 'upi', name: 'UPI', icon: 'mobile', color: '#7E57C2'},
    {id: 'bank', name: 'Bank Account', icon: 'bank', color: '#4CAF50'},
    {id: 'paytm', name: 'Paytm Wallet', icon: 'wallet', color: '#00B9F1'},
  ]

  const withdrawalHistory = [
    {
      id: 1,
      amount: '₹500',
      method: 'UPI',
      date: 'Today, 10:30 AM',
      status: 'Completed',
    },
    {
      id: 2,
      amount: '₹1000',
      method: 'Bank Account',
      date: 'May 28',
      status: 'Completed',
    },
    {
      id: 3,
      amount: '₹750',
      method: 'Paytm',
      date: 'May 20',
      status: 'Processing',
    },
  ]

  const handleWithdraw = () => {
    if (!amount) {
      alert('Please enter withdrawal amount')
      return
    }

    if (parseInt(amount) < 100) {
      alert('Minimum withdrawal amount is ₹100')
      return
    }

    // Process withdrawal logic here
    alert(`Withdrawal request for ₹${amount} submitted successfully!`)
    setAmount('')
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        {/* <TouchableOpacity style={styles.backButton}>
          <Icon name='arrow-back' size={24} color='#fff' />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Withdraw Money</Text>
        <View style={styles.headerRight} /> */}
      </View>

      {/* Balance Card */}
      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>Available Balance</Text>
        <Text style={styles.balanceAmount}>₹1,250</Text>
        <Text style={styles.minAmount}>Minimum withdrawal: ₹100</Text>
      </View>

      {/* Amount Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Enter Amount</Text>
        <View style={styles.amountInputContainer}>
          <Text style={styles.currencySymbol}>₹</Text>
          <TextInput
            style={styles.amountInput}
            placeholder='0'
            placeholderTextColor='#aaa'
            keyboardType='numeric'
            value={amount}
            onChangeText={setAmount}
            autoFocus
          />
        </View>

        <View style={styles.quickAmounts}>
          {[100, 250, 500, 1000].map(value => (
            <TouchableOpacity
              key={value}
              style={styles.quickAmountButton}
              onPress={() => setAmount(value.toString())}>
              <Text style={styles.quickAmountText}>₹{value}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Withdrawal Methods */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Withdrawal Method</Text>
        <View style={styles.methodsContainer}>
          {withdrawalMethods.map(method => (
            <TouchableOpacity
              key={method.id}
              style={[
                styles.methodCard,
                selectedMethod === method.id && styles.methodCardSelected,
              ]}
              onPress={() => setSelectedMethod(method.id)}>
              <View
                style={[styles.methodIcon, {backgroundColor: method.color}]}>
                <FontAwesome name={method.icon} size={20} color='#fff' />
              </View>
              <Text style={styles.methodName}>{method.name}</Text>
              {selectedMethod === method.id && (
                <View style={styles.selectedIndicator}>
                  <Ionicons name='checkmark-circle' size={20} color='#4CAF50' />
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Method Details */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          {selectedMethod === 'upi'
            ? 'UPI Details'
            : selectedMethod === 'bank'
            ? 'Bank Account Details'
            : 'Paytm Wallet Details'}
        </Text>

        {selectedMethod === 'upi' && (
          <View style={styles.detailsContainer}>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>UPI ID</Text>
              <TextInput
                style={styles.detailInput}
                value={upiId}
                onChangeText={setUpiId}
                placeholder='Enter UPI ID'
              />
            </View>
            <View style={styles.noteBox}>
              <Ionicons name='information-circle' size={20} color='#FF9800' />
              <Text style={styles.noteText}>
                Withdrawals to UPI usually process within 5 minutes
              </Text>
            </View>
          </View>
        )}

        {selectedMethod === 'bank' && (
          <View style={styles.detailsContainer}>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Account Number</Text>
              <Text style={styles.detailValue}>
                {bankDetails.accountNumber}
              </Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>IFSC Code</Text>
              <Text style={styles.detailValue}>{bankDetails.ifsc}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Account Holder</Text>
              <Text style={styles.detailValue}>{bankDetails.name}</Text>
            </View>
            <TouchableOpacity style={styles.changeButton}>
              <Text style={styles.changeButtonText}>Change Bank Account</Text>
            </TouchableOpacity>
          </View>
        )}

        {selectedMethod === 'paytm' && (
          <View style={styles.detailsContainer}>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Paytm Number</Text>
              <Text style={styles.detailValue}>+91 98******45</Text>
            </View>
            <View style={styles.noteBox}>
              <Ionicons name='information-circle' size={20} color='#FF9800' />
              <Text style={styles.noteText}>
                Ensure your Paytm account is verified with KYC
              </Text>
            </View>
          </View>
        )}
      </View>

      {/* Withdraw Button */}
      <TouchableOpacity
        style={[
          styles.withdrawButton,
          amount === '' && styles.withdrawButtonDisabled,
        ]}
        onPress={handleWithdraw}
        disabled={amount === ''}>
        <Text style={styles.withdrawButtonText}>Withdraw ₹{amount || '0'}</Text>
      </TouchableOpacity>

      {/* Recent Withdrawals */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Withdrawals</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.historyContainer}>
          {withdrawalHistory.map(item => (
            <View key={item.id} style={styles.historyItem}>
              <View style={styles.historyIcon}>
                <Ionicons name='arrow-up' size={20} color='#FF6B6B' />
              </View>
              <View style={styles.historyInfo}>
                <Text style={styles.historyAmount}>{item.amount}</Text>
                <Text style={styles.historyMethod}>{item.method}</Text>
              </View>
              <View style={styles.historyDateContainer}>
                <Text style={styles.historyDate}>{item.date}</Text>
                <View
                  style={[
                    styles.statusBadge,
                    item.status === 'Completed'
                      ? styles.completedBadge
                      : styles.processingBadge,
                  ]}>
                  <Text style={styles.statusText}>{item.status}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* Security Info */}
      <View style={styles.securityContainer}>
        <Ionicons name='shield-checkmark' size={24} color='#4CAF50' />
        <Text style={styles.securityText}>
          All transactions are securely processed
        </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#171449',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
  },
  headerRight: {
    width: 40,
  },
  balanceCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 15,
    margin: 20,
    marginTop: -20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    alignItems: 'center',
  },
  balanceLabel: {
    color: '#777',
    fontSize: 14,
    marginBottom: 1,
  },
  balanceAmount: {
    fontSize: 25,
    fontWeight: '800',
    color: '#171449',
    marginBottom: 1,
  },
  minAmount: {
    color: '#FF6B6B',
    fontWeight: '600',
    fontSize: 14,
  },
  inputContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 15,
    margin: 20,
    marginTop: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#444',
    marginBottom: 15,
  },
  amountInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#E0D7FF',
    paddingBottom: 10,
    marginBottom: 10,
  },
  currencySymbol: {
    fontSize: 25,
    fontWeight: '800',
    color: '#171449',
    marginRight: 5,
  },
  amountInput: {
    flex: 1,
    fontSize: 25,
    fontWeight: '800',
    color: '#171449',
    padding: 0,
  },
  quickAmounts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 1,
  },
  quickAmountButton: {
    backgroundColor: '#F0E9FF',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  quickAmountText: {
    color: '#7E57C2',
    fontWeight: '600',
  },
  section: {
    padding: 20,
    paddingBottom: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#171449',
  },
  viewAll: {
    color: '#7E57C2',
    fontWeight: '600',
  },
  methodsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  methodCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    width: '31%',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#F0F0F0',
    position: 'relative',
  },
  methodCardSelected: {
    borderColor: '#7E57C2',
    backgroundColor: '#F8F5FF',
  },
  methodIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  methodName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#444',
  },
  selectedIndicator: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  detailsContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    marginTop: 10,
  },
  detailRow: {
    marginBottom: 15,
  },
  detailLabel: {
    color: '#777',
    fontSize: 14,
    marginBottom: 5,
  },
  detailValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  detailInput: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    borderBottomWidth: 1,
    borderBottomColor: '#E0D7FF',
    paddingVertical: 5,
  },
  noteBox: {
    flexDirection: 'row',
    backgroundColor: '#FFF9E6',
    padding: 15,
    borderRadius: 15,
    marginTop: 10,
  },
  noteText: {
    flex: 1,
    color: '#FF9800',
    marginLeft: 10,
    fontSize: 14,
  },
  changeButton: {
    backgroundColor: '#F0E9FF',
    padding: 12,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  changeButtonText: {
    color: '#7E57C2',
    fontWeight: '600',
  },
  withdrawButton: {
    backgroundColor: '#171449',
    padding: 18,
    borderRadius: 15,
    margin: 20,
    marginTop: 10,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#171449',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  withdrawButtonDisabled: {
    backgroundColor: '#b0a9cf',
  },
  withdrawButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  historyContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 15,
    // marginTop: 10,
  },
  historyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  historyIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFF0F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  historyInfo: {
    flex: 1,
  },
  historyAmount: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
    marginBottom: 3,
  },
  historyMethod: {
    fontSize: 14,
    color: '#666',
  },
  historyDateContainer: {
    alignItems: 'flex-end',
  },
  historyDate: {
    fontSize: 12,
    color: '#999',
    marginBottom: 5,
  },
  statusBadge: {
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  completedBadge: {
    backgroundColor: '#E8F5E9',
  },
  processingBadge: {
    backgroundColor: '#FFF8E1',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },
  securityContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingBottom: 30,
  },
  securityText: {
    color: '#4CAF50',
    fontWeight: '600',
    marginLeft: 10,
  },
})

export default WithdrawPage
