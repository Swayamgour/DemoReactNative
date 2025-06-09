import {View, Image, StyleSheet} from 'react-native'
import React, {Component} from 'react'

export class SocialMedia extends Component {
  render () {
    return (
      <View style={styles.iconRow}>
        <Image
          source={require('../assets/logo/instagram.png')}
          style={styles.InstagramLogo}
          resizeMode='contain'
        />
        <Image
          source={require('../assets/logo/facebook.png')}
          style={styles.InstagramLogo}
          resizeMode='contain'
        />
        <Image
          source={require('../assets/logo/linkdin.png')}
          style={styles.InstagramLogo}
          resizeMode='contain'
        />
        <Image
          source={require('../assets/logo/twitter.png')}
          style={styles.InstagramLogo}
          resizeMode='contain'
        />
      </View>
    )
  }
}

export default SocialMedia

const styles = StyleSheet.create({
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  InstagramLogo: {
    width: 50,
    height: 50,
  },
})
