import React, {useState} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Modal,
  Button,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import DateTimePicker from '@react-native-community/datetimepicker' // You'll need to install this package
import SocialMedia from '../components/SocialMedia'

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    dob: '',
    gender: '',
    agreeTerms: false,
  })

  const [showDatePicker, setShowDatePicker] = useState(false)
  const [date, setDate] = useState(new Date())

  const handleInputChange = (field, value) => {
    setFormData(prev => ({...prev, [field]: value}))
  }

  const toggleAgreement = () => {
    setFormData(prev => ({...prev, agreeTerms: !prev.agreeTerms}))
  }

  const handleSubmit = () => {
    console.log('Form submitted:', formData)
    // Add your form submission logic here
  }

  const onChangeDate = (event, selectedDate) => {
    setShowDatePicker(Platform.OS === 'ios') // keep open on ios, close on android
    if (selectedDate) {
      setDate(selectedDate)
      // Format date as DD/MM/YYYY
      const formattedDate = selectedDate
        .toLocaleDateString('en-GB')
        .replace(/\//g, '/')
      handleInputChange('dob', formattedDate)
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <LinearGradient
        colors={['#171449', '#3F4C77']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps='handled'>
          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/logo.png')}
              style={styles.logo}
              resizeMode='contain'
            />
          </View>

          <View style={styles.formCard}>
            {/* Full Name Field */}
            <View style={styles.inputContainer}>
              <View style={styles.inputWithIcon}>
                <Icon name='account-outline' size={24} color='#171449' />
                <TextInput
                  style={styles.flatInput}
                  placeholder='Full Name'
                  placeholderTextColor='#999'
                  value={formData.fullName}
                  onChangeText={text => handleInputChange('fullName', text)}
                  underlineColorAndroid='transparent'
                />
              </View>
              <View style={styles.inputUnderline} />
            </View>

            {/* Mobile Field */}
            <View style={styles.inputContainer}>
              <View style={styles.inputWithIcon}>
                <Icon name='phone-outline' size={24} color='#171449' />
                <TextInput
                  style={styles.flatInput}
                  placeholder='Mobile Number'
                  placeholderTextColor='#999'
                  keyboardType='phone-pad'
                  value={formData.mobile}
                  onChangeText={text => handleInputChange('mobile', text)}
                  underlineColorAndroid='transparent'
                />
              </View>
              <View style={styles.inputUnderline} />
            </View>

            {/* Date of Birth Field */}
            <View style={styles.inputContainer}>
              <View style={styles.inputWithIcon}>
                <Icon name='calendar-month-outline' size={24} color='#171449' />
                <TouchableOpacity
                  style={{flex: 1, justifyContent: 'center'}}
                  onPress={() => setShowDatePicker(true)}>
                  <Text
                    style={[
                      styles.flatInput,
                      {
                        paddingVertical: 10,
                        color: formData.dob ? '#171449' : '#999',
                      },
                    ]}>
                    {formData.dob || 'DOB (DD/MM/YYYY)'}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.inputUnderline} />
            </View>

            {showDatePicker && (
              <DateTimePicker
                value={date}
                mode='date'
                display='default'
                onChange={onChangeDate}
                maximumDate={new Date()} // DOB can't be in future
              />
            )}

            {/* Gender Field */}
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Gender</Text>
              <View style={styles.genderContainer}>
                <TouchableOpacity
                  style={[
                    styles.genderOption,
                    formData.gender === 'Male' && styles.selectedGender,
                  ]}
                  onPress={() => handleInputChange('gender', 'Male')}>
                  <Text style={styles.genderText}>Male</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.genderOption,
                    formData.gender === 'Female' && styles.selectedGender,
                  ]}
                  onPress={() => handleInputChange('gender', 'Female')}>
                  <Text style={styles.genderText}>Female</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Terms Agreement */}
            <View style={styles.termsContainer}>
              <TouchableOpacity
                onPress={toggleAgreement}
                style={styles.checkbox}>
                <View
                  style={[
                    styles.checkboxSquare,
                    formData.agreeTerms && styles.checkedSquare,
                  ]}>
                  {formData.agreeTerms && (
                    <Text style={styles.checkmark}>✓</Text>
                  )}
                </View>
              </TouchableOpacity>
              <Text style={styles.termsText}>
                Agree with{' '}
                <Text style={styles.termsLink}>Terms & Conditions</Text>
              </Text>
            </View>

            {/* Submit Button */}
            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmit}
              disabled={!formData.agreeTerms}>
              <LinearGradient
                colors={['#3F4C77', '#171449']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={styles.buttonGradient}>
                <Text style={styles.buttonText}>SUBMIT</Text>
              </LinearGradient>
            </TouchableOpacity>

            <View>
              <SocialMedia />
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  logo: {
    width: 200,
    height: 200,
  },
  formCard: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 30,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 0,
    
  },
  iconStyle: {
    marginRight: 10,
    // marginTop:10
  },
  flatInput: {
    flex: 1,
    fontSize: 14,
    paddingVertical: 8,
    color: '#171449',
    backgroundColor: 'white',
    marginLeft:10
  },
  inputUnderline: {
    height: 1.5,
    backgroundColor: '#171449',
    marginTop: 2,
    marginLeft: 34, // Leave space equal to icon width + marginRight (24 + 10)
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#171449',
    marginBottom: 8,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  genderOption: {
    width: '48%',
    paddingVertical: 12,
    borderWidth: 1.5,
    borderColor: '#ddd',
    borderRadius: 8,
    alignItems: 'center',
  },
  selectedGender: {
    backgroundColor: '#f0f4ff',
    borderColor: '#3F4C77',
  },
  genderText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  checkbox: {
    marginRight: 10,
  },
  checkboxSquare: {
    width: 22,
    height: 22,
    borderWidth: 2,
    borderColor: '#171449',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedSquare: {
    backgroundColor: '#171449',
  },
  checkmark: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  termsText: {
    fontSize: 14,
    color: '#555',
  },
  termsLink: {
    color: '#3F4C77',
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
  submitButton: {
    borderRadius: 30,
    overflow: 'hidden',
    marginTop: 10,
    marginBottom:30
  },
  buttonGradient: {
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
})

export default RegistrationForm
