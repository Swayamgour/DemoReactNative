import React, {useRef} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput as RNTextInput,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {TextInput} from 'react-native-paper'
import SocialMedia from '../components/SocialMedia'
import {useNavigation} from '@react-navigation/native'

const EWLLogin = () => {
  const [mobile, setMobile] = React.useState('')
  const scrollRef = useRef(null)
  const inputRef = useRef(null)
  const navigate = useNavigation()

  const handleFocus = () => {
    // Scroll to the input position
    scrollRef.current?.scrollTo({y: 200, animated: true})
  }

  // Scroll back to the top when the input loses focus
  const handleBlur = () => {
    scrollRef.current?.scrollTo({y: 0, animated: true})
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
            <TextInput
              ref={inputRef}
              label='Mobile'
              placeholder='+91-8887699189'
              placeholderTextColor='#888'
              keyboardType='numeric'
              mode='outlined'
              value={mobile}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChangeText={setMobile}
              maxLength={10}
              style={styles.input}
              autoFocus={true}
              theme={{
                roundness: 10,
                colors: {
                  primary: '#171449',
                  text: '#000',
                  placeholder: '#888',
                  background: '#fff',
                  outlineColor: '#171449',
                },
              }}
            />

            <Text style={styles.terms}>
              By continuing you accept{' '}
              <Text style={styles.boldText}>terms of service</Text> and{' '}
              <Text style={styles.boldText}>privacy policy</Text>.
            </Text>

            <TouchableOpacity
              onPress={() => navigate.navigate('otp')}
              style={styles.signInButton}>
              <LinearGradient
                colors={['#171449', '#35419A']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={styles.signInGradient}>
                <Text style={styles.signInText}>SIGN IN</Text>
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

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Platform.select({ios: 80, android: 40}),
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
    marginTop: 20,
    alignItems: 'center',
    elevation: 10,
    paddingVertical: 50,
    paddingHorizontal: 25,
    paddingBottom: 70, // Extra padding for keyboard space
  },
  input: {
    width: '100%',
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 20,
    height: 55,
  },
  terms: {
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 40,
    color: '#444',
    width: '80%',
  },
  boldText: {
    fontWeight: 'bold',
    color: '#000',
  },
  signInButton: {
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 20,
  },
  signInGradient: {
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 30,
  },
  signInText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
})

export default EWLLogin
