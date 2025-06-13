import React, {useState, useEffect, useRef} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import SocialMedia from '../components/SocialMedia'
import {useNavigation} from '@react-navigation/native'

const EWLVerify = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [timer, setTimer] = useState(30)
  const [resendActive, setResendActive] = useState(false)

  const navigate = useNavigation()
  const inputsRef = useRef([])
  const scrollRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          clearInterval(interval)
          setResendActive(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const handleOTPChange = (index, value) => {
    // Only allow numbers
    if (!/^\d*$/.test(value)) return

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Auto-focus next input
    if (value && index < 5) {
      inputsRef.current[index + 1].focus()
    }

    // Auto-submit when last digit is entered
    if (index === 5 && value) {
      handleVerify()
    }
  }

  const handleBackspace = (index, value) => {
    if (!value && index > 0) {
      inputsRef.current[index - 1].focus()
    }
  }

  const handleResend = () => {
    if (!resendActive) return

    setTimer(30)
    setResendActive(false)
    setOtp(['', '', '', '', '', ''])
    inputsRef.current[0].focus()
  }

  const handleVerify = () => {
    const enteredOtp = otp.join('')
    if (enteredOtp.length === 6) {
      navigate.navigate('reg')
    }
  }

  const focusOnInput = () => {
    scrollRef.current?.scrollTo({
      y: Dimensions.get('window').height * 0.3,
      animated: true,
    })
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}>
      <ScrollView
        ref={scrollRef}
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps='handled'
        showsVerticalScrollIndicator={false}>
        <LinearGradient
           colors={['#171449', '#35419A']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.gradient}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/logo.png')}
              style={styles.logo}
              resizeMode='contain'
            />
          </View>

          <View style={styles.bottomCard}>
            <Text style={styles.heading}>Verify with OTP</Text>
            <TouchableOpacity
              onPress={() => navigate.goBack()}
              // style={styles.subText}
            >
              <Text style={styles.subText}> OTP sent to +91-8887699189 ✏️</Text>
            </TouchableOpacity>

            <View style={styles.otpContainer}>
              {otp.map((digit, index) => (
                <TextInput
                  key={index}
                  style={[
                    styles.otpInput,
                    digit ? styles.otpInputFilled : null,
                  ]}
                  keyboardType='number-pad'
                  maxLength={1}
                  value={digit}
                  ref={ref => (inputsRef.current[index] = ref)}
                  onChangeText={value => handleOTPChange(index, value)}
                  onKeyPress={({nativeEvent}) => {
                    if (nativeEvent.key === 'Backspace') {
                      handleBackspace(index, otp[index])
                    }
                  }}
                  onFocus={focusOnInput}
                  selectionColor='#171449'
                />
              ))}
            </View>

            <TouchableOpacity
              onPress={handleResend}
              disabled={!resendActive}
              style={styles.resendButton}>
              <Text
                style={[
                  styles.resendText,
                  resendActive ? styles.resendActive : null,
                ]}>
                {resendActive ? 'Resend OTP' : `Resend OTP in ${timer}s`}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleVerify}
              style={styles.verifyButton}
              disabled={otp.join('').length !== 6}>
              <LinearGradient
                colors={['#171449', '#35419A']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={[
                  styles.verifyGradient,
                  otp.join('').length !== 6 ? styles.buttonDisabled : null,
                ]}>
                <Text style={styles.verifyText}>VERIFY</Text>
              </LinearGradient>
            </TouchableOpacity>

            <View>
              <SocialMedia />
            </View>
          </View>
        </LinearGradient>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default EWLVerify

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
    justifyContent: 'space-between',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 10,
  },
  bottomCard: {
    backgroundColor: '#fff',
    width: '100%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: 'center',
    elevation: 10,
    paddingVertical: 50,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  heading: {
    fontSize: 22,
    fontWeight: '600',
    color: '#171449',
    marginBottom: 8,
  },
  subText: {
    fontSize: 18,
    color: '#444',
    marginBottom: 30,
    textAlign: 'center',
  },
  boldText: {},
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%',
    marginBottom: 25,
  },
  otpInput: {
    borderBottomWidth: 2,
    borderColor: '#ddd',
    width: 45,
    height: 60,
    fontSize: 24,
    textAlign: 'center',
    borderRadius: 8,
    backgroundColor: '#f8f8f8',
  },
  otpInputFilled: {
    borderColor: '#171449',
    backgroundColor: '#f0f4ff',
  },
  resendButton: {
    marginBottom: 30,
  },
  resendText: {
    fontSize: 15,
    color: '#777',
  },
  resendActive: {
    color: '#3F4C77',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  verifyButton: {
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 30,
  },
  verifyGradient: {
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 30,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  verifyText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
})
