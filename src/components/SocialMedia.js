import { View, Image, StyleSheet, Text } from 'react-native'
import React, { Component } from 'react'

export class SocialMedia extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.followContainer}>
          <Text style={styles.followText}>Follow Us</Text>
          <View style={styles.halfUnderline} />
        </View>

        <View style={styles.iconRow}>
          <Image
            source={require('../assets/logo/instagram.png')}
            style={styles.icon}
            resizeMode='contain'
          />
          <Image
            source={require('../assets/logo/facebook.png')}
            style={styles.icon}
            resizeMode='contain'
          />
          <Image
            source={require('../assets/logo/linkdin.png')}
            style={styles.icon}
            resizeMode='contain'
          />
          <Image
            source={require('../assets/logo/twitter1.png')}
            style={styles.icon}
            resizeMode='contain'
          />
        </View>
      </View>
    )
  }
}

export default SocialMedia

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  followContainer: {
    alignItems: 'flex-start',   // so the underline starts under the text
    marginBottom: 10,
  },
  followText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#171449',
  },
  halfUnderline: {
    height: 2,
    backgroundColor: '#171449',
    width: '50%',    // underline is half the width of the parent container
    marginTop: 4,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  icon: {
    width: 50,
    height: 50,
  },
})
