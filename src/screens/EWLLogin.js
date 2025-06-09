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
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {TextInput} from 'react-native-paper'
import SocialMedia from '../components/SocialMedia'
import {useNavigation} from '@react-navigation/native'

const EWLLogin = () => {
  const [text, setText] = React.useState('')
  const scrollRef = useRef(null)

  const navigate = useNavigation()

  const handleFocus = () => {
    // Scroll to input when focused
    scrollRef.current?.scrollTo({y: 300, animated: true}) // adjust y as needed
  }

  const handleBlur = () => {
    // Scroll back to top
    scrollRef.current?.scrollTo({y: 0, animated: true})
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1}}>
      <ScrollView
        ref={scrollRef}
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps='handled'>
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
            <TextInput
              label='Mobile'
              placeholder='+91-8887699189'
              placeholderTextColor='#888'
              keyboardType='numeric'
              mode='outlined'
              value={text}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChangeText={text => setText(text)}
              style={styles.input}
              theme={{
                roundness: 10, // 👈 Apply borderRadius here
                colors: {
                  primary: '#171449', // active border and label
                  text: '#000', // input text
                  placeholder: '#888', // placeholder
                  background: '#fff', // background color
                  outlineColor: '#171449', // 👈 outline border color
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
                colors={['#171449', '#3F4C77']}
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

export default EWLLogin

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 80,
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
    // padding: 20,
    marginTop: 20,
    alignItems: 'center',
    elevation: 10,
    paddingVertical: 50,
    paddingHorizontal: 25,
  },
  label: {
    alignSelf: 'flex-start',
    marginBottom: 5,
    color: '#171449',
    fontWeight: 'bold',
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
