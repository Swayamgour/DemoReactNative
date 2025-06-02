import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native' // ✅ Import the hook


const {width} = Dimensions.get('window');

function Wallet() {


    const navigate = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      {/* Top Content Area */}
      <View style={styles.topContainer}>
        {/* Balance Card */}
        <View style={styles.card}>
          {/* Decorative Elements */}
          <View style={styles.circle1} />
          <View style={styles.circle2} />
          
          <Text style={styles.balanceLabel}>Current Balance</Text>
          <Text style={styles.balanceAmount}>₹ 50.00</Text>
          
          {/* Card Details */}
          <View style={styles.cardDetails}>
            <View style={styles.cardInfo}>
              <Text style={styles.cardLabel}>Card Holder</Text>
              <Text style={styles.cardValue}>John Doe</Text>
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardLabel}>Valid Thru</Text>
              <Text style={styles.cardValue}>12/25</Text>
            </View>
            <Image
              source={require('../../src/assets/image/atmChip.png')}
              style={styles.chipIcon}
            />
          </View>
        </View>

        {/* Recent Transactions */}
        <View style={styles.transactionsContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Transactions</Text>
            <TouchableOpacity>
              <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
          </View>

          {/* <View style={styles.transactionItem}>
            <View style={[styles.transactionIcon, {backgroundColor: '#f0f5ff'}]}>
              <Text style={styles.iconText}>🛒</Text>
            </View>
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionName}>Grocery Store</Text>
              <Text style={styles.transactionDate}>Today, 10:30 AM</Text>
            </View>
            <Text style={styles.transactionAmount}>-₹ 120.00</Text>
          </View> */}

          <View style={styles.transactionItem}>
            <View style={[styles.transactionIcon, {backgroundColor: '#f0f8f0'}]}>
              <Text style={styles.iconText}>💵</Text>
            </View>
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionName}>Cash Deposit</Text>
              <Text style={styles.transactionDate}>Yesterday, 04:15 PM</Text>
            </View>
            <Text style={[styles.transactionAmount, styles.positiveAmount]}>
              +₹ 500.00
            </Text>
          </View>

          {/* <View style={styles.transactionItem}>
            <View style={[styles.transactionIcon, {backgroundColor: '#fff8f0'}]}>
              <Text style={styles.iconText}>🍔</Text>
            </View>
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionName}>Food Order</Text>
              <Text style={styles.transactionDate}>Yesterday, 01:20 PM</Text>
            </View>
            <Text style={styles.transactionAmount}>-₹ 320.00</Text>
          </View> */}
        </View>
      </View>

      {/* Bottom Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={()=>navigate.navigate('ChooseAmount')} style={[styles.actionButton, styles.addButton]}>
          <Text style={styles.buttonText}>Add Money</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Wallet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fe',
    justifyContent: 'space-between',
  },
  topContainer: {
    flex: 1,
  },
  card: {
    backgroundColor: '#1a1a2e',
    borderRadius: 24,
    padding: 25,
    margin: 20,
    marginTop: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 10,
    overflow: 'hidden',
  },
  circle1: {
    position: 'absolute',
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: 'rgba(255,255,255,0.1)',
    top: -50,
    right: -80,
  },
  circle2: {
    position: 'absolute',
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: 'rgba(255,255,255,0.05)',
    bottom: -70,
    left: -50,
  },
  balanceLabel: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.7)',
    marginBottom: 5,
  },
  balanceAmount: {
    fontSize: 36,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 25,
  },
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 15,
  },
  cardInfo: {
    marginRight: 20,
  },
  cardLabel: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.6)',
    marginBottom: 4,
  },
  cardValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  chipIcon: {
    width: 50,
    height: 40,
    resizeMode: 'contain',
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  actionButton: {
    width: '100%',
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#4e54c8',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 8,
  },
  addButton: {
    backgroundColor: '#171449',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  transactionsContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 10,
    padding: 25,
    paddingTop: 20,
    flex: 1,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a1a2e',
  },
  viewAll: {
    fontSize: 15,
    color: '#4e54c8',
    fontWeight: '600',
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  transactionIcon: {
    width: 50,
    height: 50,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  iconText: {
    fontSize: 22,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a2e',
    marginBottom: 4,
  },
  transactionDate: {
    fontSize: 13,
    color: '#888',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FF4D4D',
  },
  positiveAmount: {
    color: '#10B981',
  },
});