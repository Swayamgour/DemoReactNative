import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import MenuIcon from 'react-native-vector-icons/Entypo'
import Wallet from 'react-native-vector-icons/Ionicons'
import Notification from 'react-native-vector-icons/Fontisto'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {useNavigation} from '@react-navigation/native' // ✅ Import the hook

function Navbar () {
  const navigation = useNavigation()

  return (
    <View>
      <SafeAreaView style={styles.navbar}>
        <View style={styles.navRightSection}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <MenuIcon name='menu' size={25} style={styles.icons} />
          </TouchableOpacity>
          <Image
            source={require('../assets/BLueLogo.png')}
            style={styles.logo}
            resizeMode='contain'
          />
        </View>

        <View style={styles.navRightSection}>
          {/* <View>
            <Notification
              name='notifications-active'
              size={25}
              style={styles.icons}
            />
          </View> */}

          <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
            <Notification name='bell' size={25} style={styles.icons} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Wallet')}>
            <Wallet name='wallet-outline' size={25} style={styles.icons} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      {/* <View style={styles.iconContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {array?.map((item, index) => (
            <TouchableOpacity
              onPress={() => navigation.navigate(item.Navigate)}
              key={index}
              style={styles.iconItem}>
              {item.icon}
              <Text style={styles.iconLabel}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View> */}
    </View>
  )
}

export default Navbar

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 1,
    // backgroundColor: '#fff',
    elevation: 5,
    // borderBottomLeftRadius: 30,
    // borderBottomRightRadius: 30,
  },
  logo: {
    width: 100,
    height: 50,
    alignSelf: 'center',
  },
  textOFEarning: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#171449',
    alignSelf: 'center',
    borderLeftWidth: 1,
    borderColor: 'grey',
    paddingLeft: 5,
  },
  icons: {
    color: '#3969AF',
  },
  navRightSection: {
    flexDirection: 'row',
    gap: '25',
    alignItems: 'center',
  },

  iconContainer: {
    height: 60,
    backgroundColor: '#171449',
    paddingHorizontal: 10,
    color: '#fff',
  },
  iconItem: {
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
    color: '#fff',
  },
  iconLabel: {
    fontSize: 10,
    color: '#171449',
    marginTop: 2,
    textAlign: 'center',
    color: '#fff',
  },
})
