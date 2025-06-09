import React, {useState} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Platform,
} from 'react-native'
// import { Ionicons, FontAwesome, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const KYCScreen = () => {
  const [activeTab, setActiveTab] = useState('aadhaar')
  const [aadhaarNumber, setAadhaarNumber] = useState('')
  const [panNumber, setPanNumber] = useState('')
  const [fullName, setFullName] = useState('')
  const [dob, setDob] = useState('')

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Ionicons name='shield-checkmark' size={28} color='#fff' />
          <Text style={styles.headerTitle}>KYC Verification</Text>
        </View>
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>Step 2 of 3</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, {width: '66%'}]} />
          </View>
        </View>
      </View>

      {/* Steps Indicator */}
      <View style={styles.stepsContainer}>
        <View style={[styles.step, styles.stepCompleted]}>
          <MaterialIcons name='check' size={20} color='#fff' />
          <Text style={styles.stepText}>Personal Info</Text>
        </View>

        <View style={[styles.step, styles.stepActive]}>
          <Text style={[styles.stepNumber, styles.stepNumberActive]}>2</Text>
          <Text style={[styles.stepText, styles.stepTextActive]}>
            Documents
          </Text>
        </View>

        <View style={styles.step}>
          <Text style={styles.stepNumber}>3</Text>
          <Text style={styles.stepText}>Verification</Text>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'aadhaar' && styles.activeTab]}
          onPress={() => setActiveTab('aadhaar')}>
          <MaterialCommunityIcons
            name='credit-card'
            size={24}
            color={activeTab === 'aadhaar' ? '#171449' : '#888'}
          />
          <Text
            style={[
              styles.tabText,
              activeTab === 'aadhaar' && styles.activeTabText,
            ]}>
            Aadhaar Card
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === 'pan' && styles.activeTab]}
          onPress={() => setActiveTab('pan')}>
          <FontAwesome
            name='id-card'
            size={20}
            color={activeTab === 'pan' ? '#171449' : '#888'}
          />
          <Text
            style={[
              styles.tabText,
              activeTab === 'pan' && styles.activeTabText,
            ]}>
            PAN Card
          </Text>
        </TouchableOpacity>
      </View>

      {/* Form Content */}
      <View style={styles.formContainer}>
        {activeTab === 'aadhaar' ? (
          <>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Aadhaar Card Details</Text>

              <Text style={styles.label}>Aadhaar Number</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder='Enter 12-digit Aadhaar number'
                  placeholderTextColor='#aaa'
                  value={aadhaarNumber}
                  onChangeText={setAadhaarNumber}
                  keyboardType='numeric'
                  maxLength={12}
                />
                <MaterialIcons
                  name='verified-user'
                  size={24}
                  color='#171449'
                  style={styles.inputIcon}
                />
              </View>

              <Text style={styles.label}>Full Name (as on Aadhaar)</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder='Enter your full name'
                  placeholderTextColor='#aaa'
                  value={fullName}
                  onChangeText={setFullName}
                />
                <Ionicons
                  name='person'
                  size={24}
                  color='#171449'
                  style={styles.inputIcon}
                />
              </View>

              <Text style={styles.label}>Date of Birth (as on Aadhaar)</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder='DD/MM/YYYY'
                  placeholderTextColor='#aaa'
                  value={dob}
                  onChangeText={setDob}
                />
                <MaterialIcons
                  name='date-range'
                  size={24}
                  color='#171449'
                  style={styles.inputIcon}
                />
              </View>

              <Text style={styles.uploadTitle}>Upload Aadhaar Card</Text>
              <View style={styles.uploadContainer}>
                <View style={styles.uploadBox}>
                  <MaterialCommunityIcons
                    name='camera-plus'
                    size={40}
                    color='#171449'
                  />
                  <Text style={styles.uploadText}>Front Side</Text>
                </View>
                <View style={styles.uploadBox}>
                  <MaterialCommunityIcons
                    name='camera-plus'
                    size={40}
                    color='#171449'
                  />
                  <Text style={styles.uploadText}>Back Side</Text>
                </View>
              </View>

              <Text style={styles.note}>
                <Ionicons name='information-circle' size={16} color='#171449' />
                Ensure all details are clearly visible and match your Aadhaar
                card
              </Text>
            </View>
          </>
        ) : (
          <>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>PAN Card Details</Text>

              <Text style={styles.label}>PAN Number</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder='Enter 10-digit PAN number'
                  placeholderTextColor='#aaa'
                  value={panNumber}
                  onChangeText={setPanNumber}
                  maxLength={10}
                  autoCapitalize='characters'
                />
                <MaterialIcons
                  name='verified-user'
                  size={24}
                  color='#171449'
                  style={styles.inputIcon}
                />
              </View>

              <Text style={styles.label}>Full Name (as on PAN)</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder='Enter your full name'
                  placeholderTextColor='#aaa'
                  value={fullName}
                  onChangeText={setFullName}
                />
                <Ionicons
                  name='person'
                  size={24}
                  color='#171449'
                  style={styles.inputIcon}
                />
              </View>

              <Text style={styles.uploadTitle}>Upload PAN Card</Text>
              <View style={styles.uploadContainer}>
                <View style={[styles.uploadBox, styles.panUploadBox]}>
                  <MaterialCommunityIcons
                    name='camera-plus'
                    size={40}
                    color='#171449'
                  />
                  <Text style={styles.uploadText}>PAN Card Photo</Text>
                </View>
              </View>

              <Text style={styles.note}>
                <Ionicons name='information-circle' size={16} color='#171449' />
                Ensure all details are clearly visible and match your PAN card
              </Text>
            </View>
          </>
        )}
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.outlineButton}>
          <Text style={styles.outlineButtonText}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Continue Verification</Text>
          <Ionicons
            name='arrow-forward'
            size={20}
            color='#fff'
            style={styles.buttonIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Security Info */}
      <View style={styles.securityContainer}>
        <MaterialIcons name='security' size={24} color='#171449' />
        <Text style={styles.securityText}>
          Your documents are securely encrypted. We follow RBI guidelines for
          data protection.
        </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9ff',
  },
  header: {
    backgroundColor: '#171449',
    paddingTop: Platform.OS === 'ios' ? 50 : 30,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
    marginLeft: 10,
  },
  progressContainer: {
    marginTop: 5,
  },
  progressText: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 5,
    opacity: 0.8,
  },
  progressBar: {
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#ff6b6b',
    borderRadius: 3,
  },
  stepsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#f0f2ff',
  },
  step: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 20,
    backgroundColor: '#e4e6f1',
  },
  stepCompleted: {
    backgroundColor: '#4caf50',
  },
  stepActive: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#171449',
  },
  stepNumber: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#a0a3bd',
    color: '#fff',
    textAlign: 'center',
    lineHeight: 24,
    fontWeight: 'bold',
    marginRight: 8,
  },
  stepNumberActive: {
    backgroundColor: '#171449',
  },
  stepText: {
    color: '#6c7293',
    fontWeight: '600',
  },
  stepTextActive: {
    color: '#171449',
  },
  tabContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#171449',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    backgroundColor: '#fff',
  },
  activeTab: {
    backgroundColor: '#f0f2ff',
    borderBottomWidth: 3,
    borderBottomColor: '#171449',
  },
  tabText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '600',
    color: '#888',
  },
  activeTabText: {
    color: '#171449',
  },
  formContainer: {
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    elevation: 3,
    shadowColor: '#171449',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#171449',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#171449',
    marginBottom: 8,
    marginTop: 15,
  },
  inputContainer: {
    position: 'relative',
  },
  input: {
    backgroundColor: '#f8f9ff',
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 20,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#e4e6f1',
    color: '#171449',
    paddingLeft: 50,
  },
  inputIcon: {
    position: 'absolute',
    left: 15,
    top: 15,
  },
  uploadTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#171449',
    marginTop: 25,
    marginBottom: 15,
  },
  uploadContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  uploadBox: {
    width: '48%',
    height: 140,
    backgroundColor: '#f0f2ff',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#d0d4e7',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  panUploadBox: {
    width: '100%',
  },
  uploadText: {
    color: '#171449',
    marginTop: 10,
    fontWeight: '500',
  },
  note: {
    marginTop: 20,
    color: '#6c7293',
    fontSize: 14,
    lineHeight: 20,
    alignItems:'center',
    alignContent:'center'

  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 25,
  },
  outlineButton: {
    width: '48%',
    paddingVertical: 16,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#171449',
    alignItems: 'center',
    justifyContent: 'center',
  },
  outlineButtonText: {
    color: '#171449',
    fontSize: 16,
    fontWeight: '600',
  },
  primaryButton: {
    width: '48%',
    paddingVertical: 16,
    borderRadius: 15,
    backgroundColor: '#171449',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#171449',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },
  buttonIcon: {
    marginLeft: 8,
  },
  securityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e6f7ee',
    padding: 15,
    marginHorizontal: 20,
    marginBottom: 30,
    borderRadius: 15,
  },
  securityText: {
    color: '#0a7b4e',
    marginLeft: 10,
    flex: 1,
    lineHeight: 20,
  },
})

export default KYCScreen
