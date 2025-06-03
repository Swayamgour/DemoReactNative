import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
  Image,
  Dimensions,
  Modal,
} from 'react-native';

const { width } = Dimensions.get('window');

const PaymentMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState('upi');
  const [showUpiOptions, setShowUpiOptions] = useState(true);
  const [showCardForm, setShowCardForm] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvv: '',
    name: '',
  });

  const paymentMethods = [
    // { id: 'phonepe', name: 'PhonePe', icon: 'phonepe-icon' },
    { id: 'upi', name: 'UPI', icon: 'upi-icon' },
    // { id: 'any-upi', name: 'Pay by any UPI app', icon: 'any-upi-icon' },
    // { id: 'google-pay', name: 'Google Pay', icon: 'google-pay-icon' },
    { id: 'other', name: 'Other Payments', icon: 'other-icon' },
    { id: 'credit-card', name: 'Credit Card', icon: 'credit-card-icon' },
    { id: 'debit-card', name: 'Debit Card', icon: 'debit-card-icon' },
    { id: 'net-banking', name: 'Net Banking', icon: 'net-banking-icon' },
  ];

  const upiApps = [
    { id: 'paytm', name: 'Paytm' },
    { id: 'phonepe', name: 'PhonePe' },
    { id: 'google-pay', name: 'Google Pay' },
    { id: 'amazon-pay', name: 'Amazon Pay' },
    { id: 'bhim', name: 'BHIM UPI' },
    { id: 'whatsapp', name: 'WhatsApp Pay' },
  ];

  const handleMethodSelect = (methodId) => {
    setSelectedMethod(methodId);
    
    if (methodId === 'upi') {
      setShowUpiOptions(true);
      setShowCardForm(false);
    } else if (methodId === 'other' || methodId === 'credit-card' || methodId === 'debit-card') {
      setShowUpiOptions(false);
      setShowCardForm(true);
    } else {
      setShowUpiOptions(false);
      setShowCardForm(false);
    }
  };

  const handleCardInputChange = (field, value) => {
    setCardDetails(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const formatCardNumber = (input) => {
    // Remove non-digits
    const cleaned = input.replace(/\D/g, '');
    
    // Add spaces every 4 characters
    return cleaned.replace(/(\d{4})(?=\d)/g, '$1 ');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* <Text style={styles.header}>Select Payment Mode</Text> */}
        
        <View style={styles.amountContainer}>
          <Text style={styles.amountText}>Amount to Pay: <Text style={styles.boldAmount}>₹1000</Text></Text>
          <Text style={styles.bonusText}>● Free 1500 Bonus Cash</Text>
        </View>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>Recommended</Text>
        
        <View style={styles.methodsContainer}>
          {paymentMethods.map((method) => (
            <TouchableOpacity
              key={method.id}
              style={[
                styles.methodItem,
                selectedMethod === method.id && styles.selectedMethodItem
              ]}
              onPress={() => handleMethodSelect(method.id)}
            >
              <View style={styles.radioContainer}>
                <View style={styles.radioOuter}>
                  {selectedMethod === method.id && (
                    <View style={styles.radioInner} />
                  )}
                </View>
              </View>
              <Text style={styles.methodName}>{method.name}</Text>
              {/* Icon would go here */}
            </TouchableOpacity>
          ))}
        </View>

        {/* UPI Apps Selection */}
        {showUpiOptions && (
          <View style={styles.upiContainer}>
            <Text style={styles.subSectionTitle}>Select UPI App</Text>
            <View style={styles.upiGrid}>
              {upiApps.map((app) => (
                <TouchableOpacity 
                  key={app.id} 
                  style={styles.upiAppOption}
                  onPress={() => setSelectedMethod(app.id)}
                >
                  <View style={styles.upiAppIcon}>
                    {/* App icon would go here */}
                    <Text style={styles.upiAppInitial}>{app.name.charAt(0)}</Text>
                  </View>
                  <Text style={styles.upiAppName}>{app.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}

        {/* Card Input Form */}
        {showCardForm && (
          <View style={styles.cardFormContainer}>
            <Text style={styles.subSectionTitle}>Enter Card Details</Text>
            
            <View style={styles.cardPreview}>
              <View style={styles.cardLogo}>
                <Text style={styles.cardLogoText}>VISA</Text>
              </View>
              <Text style={styles.cardPreviewNumber}>
                {cardDetails.number || '•••• •••• •••• ••••'}
              </Text>
              <View style={styles.cardFooter}>
                <Text style={styles.cardPreviewName}>
                  {cardDetails.name || 'CARDHOLDER NAME'}
                </Text>
                <Text style={styles.cardPreviewExpiry}>
                  {cardDetails.expiry || '••/••'}
                </Text>
              </View>
            </View>
            
            <TextInput
              style={styles.input}
              placeholder="Card Number"
              keyboardType="numeric"
              maxLength={19}
              value={cardDetails.number}
              onChangeText={(text) => 
                handleCardInputChange('number', formatCardNumber(text))
              }
            />
            
            <View style={styles.row}>
              <TextInput
                style={[styles.input, styles.halfInput, {marginRight: 10}]}
                placeholder="MM/YY"
                maxLength={5}
                value={cardDetails.expiry}
                onChangeText={(text) => 
                  handleCardInputChange('expiry', text.replace(/\D/g, '').replace(/(\d{2})(\d{0,2})/, '$1/$2'))
                }
              />
              <TextInput
                style={[styles.input, styles.halfInput]}
                placeholder="CVV"
                keyboardType="numeric"
                maxLength={3}
                value={cardDetails.cvv}
                onChangeText={(text) => 
                  handleCardInputChange('cvv', text.replace(/\D/g, ''))
                }
              />
            </View>
            
            <TextInput
              style={styles.input}
              placeholder="Cardholder Name"
              value={cardDetails.name}
              onChangeText={(text) => 
                handleCardInputChange('name', text.toUpperCase())
              }
            />
          </View>
        )}
      </ScrollView>

      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default PaymentMethod;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fe',
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 100,
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1a1a2e',
    marginBottom: 25,
    textAlign: 'center',
  },
  amountContainer: {
    marginBottom: 15,
  },
  amountText: {
    fontSize: 18,
    color: '#1a1a2e',
    marginBottom: 8,
  },
  boldAmount: {
    fontWeight: '700',
  },
  bonusText: {
    fontSize: 16,
    color: '#10B981',
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a1a2e',
    marginBottom: 15,
  },
  subSectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a2e',
    marginBottom: 15,
    marginTop: 10,
  },
  methodsContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 3,
  },
  methodItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  selectedMethodItem: {
    backgroundColor: '#f0f2ff',
  },
  radioContainer: {
    marginRight: 15,
  },
  radioOuter: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#171449',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#171449',
  },
  methodName: {
    fontSize: 17,
    color: '#1a1a2e',
  },
  upiContainer: {
    marginTop: 20,
  },
  upiGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  upiAppOption: {
    width: width * 0.28,
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 3,
  },
  upiAppIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f0f2ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  upiAppInitial: {
    fontSize: 24,
    fontWeight: '700',
    color: '#171449',
  },
  upiAppName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1a1a2e',
    textAlign: 'center',
  },
  cardFormContainer: {
    marginTop: 20,
  },
  cardPreview: {
    backgroundColor: '#1a1a2e',
    borderRadius: 16,
    padding: 25,
    marginBottom: 20,
    height: 200,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
  },
  cardLogo: {
    alignSelf: 'flex-end',
    backgroundColor: '#fff',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  cardLogoText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#1a1a2e',
  },
  cardPreviewNumber: {
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: 2,
    color: '#fff',
    textAlign: 'center',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardPreviewName: {
    fontSize: 14,
    fontWeight: '500',
    color: 'rgba(255,255,255,0.8)',
    textTransform: 'uppercase',
  },
  cardPreviewExpiry: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  halfInput: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    shadowColor: '#171449',
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
});