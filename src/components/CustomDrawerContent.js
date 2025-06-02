// CustomDrawerContent.js
import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const {height} = Dimensions.get('window')

export default function CustomDrawerContent ({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.drawerBox}>
        {/* //
        You can also use Ionicons, FontAwesome, etc. */}
        <View style={styles.profileSection}>
          <View style={styles.avatarWrapper}>
            <Image
              source={require('../../src/assets/profile.webp')}
              style={styles.avatar}
              resizeMode='cover'
            />
            <MaterialCommunityIcons
              name='camera'
              size={18}
              color='#fff'
              style={styles.cameraIcon}
            />
          </View>
          <View>
            <Text style={styles.name}>Riveyra</Text>
            <Text style={styles.level}>Level 10</Text>
          </View>
        </View>
        <View style={styles.profileSectionSecondary}>
          <Image
            source={require('../../src/assets/Swiper.png')}
            style={styles.banner}
            resizeMode='cover'
          />

          <TouchableOpacity
            onPress={() => navigation.navigate('Wallet')}
            style={styles.itemRow}>
            <Icon name='wallet-outline' size={20} />
            <Text style={styles.label}>My Balance</Text>
            <Text style={styles.rightText}>50 Rs.</Text>
          </TouchableOpacity>

          <View style={styles.itemRow}>
            <Text style={styles.label}>Collect 500 Rs.</Text>
            <TouchableOpacity style={styles.inviteBtn}>
              <Text style={styles.inviteText}>INVITE</Text>
            </TouchableOpacity>
          </View>

          <DrawerItem icon='search-outline' label='Search' />
          <DrawerItem icon='gift-outline' label='My Cards' dot />
          <DrawerItem icon='game-controller-outline' label='How to Play' />
          <DrawerItem icon='star-outline' label='Today Leaderboard' />
          <DrawerItem
            icon='settings-outline'
            label='My Info and Settings'
            dot
          />
          <DrawerItem icon='ellipsis-horizontal-outline' label='More' />
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerItem}>Helpdesk</Text>
          <Text style={styles.footerItem}>Chat With Us</Text>
        </View>
      </View>
    </View>
  )
}

const DrawerItem = ({icon, label, dot}) => (
  <View style={styles.itemRow}>
    <Icon name={icon} size={20} />
    <Text style={styles.label}>{label}</Text>
    {dot && <View style={styles.redDot} />}
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // vertical center
    backgroundColor: 'transparent', // keep transparent to avoid extra background
  },
  drawerBox: {
    height: height * 0.9,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 10,
    maxWidth: 350,
    // padding: 15,
  },
  //   container: {flex: 1, backgroundColor: '#fff', padding: 15},/
  avatarWrapper: {
    position: 'relative',
    width: 60,
    height: 60,
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },

  cameraIcon: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 4,
    color: '#171449',
    // elevation: 2,
  },

  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#171449',
    paddingHorizontal: 15,
    paddingVertical: 20,
    gap: 15,
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },

  //   level: {
  //     fontSize: 14,
  //     color: '#ccc',
  //   },

  profileSectionSecondary: {
    padding: 15,
  },
  level: {fontSize: 12, color: '#fff'},
  banner: {width: '100%', height: 100, borderRadius: 8, marginVertical: 10},
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 0.5,
    borderColor: '#ddd',
  },
  label: {marginLeft: 10, fontSize: 14, flex: 1, color: '#171449'},
  rightText: {fontWeight: 'bold', color: '#171449'},
  inviteBtn: {
    backgroundColor: 'transparent',
    borderColor: '#000',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  inviteText: {color: '#000'},
  redDot: {
    width: 8,
    height: 8,
    backgroundColor: 'red',
    borderRadius: 4,
    marginRight: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
  footerItem: {
    fontWeight: '500',
    fontSize: 14,
    color: '#000',
  },
})
