import React, {useState, useEffect, useRef} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import SocialMedia from '../components/SocialMedia'
import {useNavigation} from '@react-navigation/native'

const EWLVerify = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [timer, setTimer] = useState(30)

  const navigate = useNavigation()

  // Create refs for 6 TextInputs
  const inputsRef = useRef([])

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const handleOTPChange = (index, value) => {
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    if (value && index < 5) {
      inputsRef.current[index + 1].focus()
    }
  }

  const handleBackspace = (index, value) => {
    if (!value && index > 0) {
      inputsRef.current[index - 1].focus()
    }
  }

  return (
    <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
      <LinearGradient
        colors={['#171449', '#3F4C77']}
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
          <Text style={styles.subText}>
            OTP sent to <Text style={styles.boldText}>+91-8887699189 ✏️</Text>
          </Text>

          <View style={styles.otpRow}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                style={styles.otpInput}
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
              />
            ))}
          </View>

          <Text style={styles.resendText}>
            Resend OTP in <Text style={styles.boldText}>{timer}s</Text>
          </Text>

          <TouchableOpacity
            onPress={() => navigate.navigate('reg')}
            style={styles.verifyButton}>
            <LinearGradient
              colors={['#3F4C77', '#171449']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.verifyGradient}>
              <Text style={styles.verifyText}>VERIFY</Text>
            </LinearGradient>
          </TouchableOpacity>

          <View>
            <SocialMedia />
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  )
}

export default EWLVerify

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 60,
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
    paddingHorizontal: 25,
  },
  heading: {
    fontSize: 20,
    fontWeight: '300',
    color: '#171449',
    marginBottom: 8,
  },
  subText: {
    fontSize: 16,
    color: '#444',
    marginBottom: 25,
  },
  boldText: {
    // fontWeight: 'bold',
    // color: '#000',
  },
  otpRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 20,
  },
  otpInput: {
    borderBottomWidth: 2,
    borderColor: '#171449',
    width: 40,
    height: 45,
    fontSize: 20,
    textAlign: 'center',
  },
  resendText: {
    fontSize: 13,
    marginBottom: 30,
    color: '#444',
  },
  verifyButton: {
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 20,
  },
  verifyGradient: {
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 30,
  },
  verifyText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
})
