import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
// Footer.js
import {useNavigation} from '@react-navigation/native'

const Footer = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.footerContainer}>
      {footerItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.tabItem}
          onPress={() => navigation?.navigate(item.route)}>
          <Icon name={item.icon} size={20} color='#171449' />
          <Text style={styles.tabText}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const footerItems = [
  {label: 'Home', icon: 'home', route: 'Dashboard'},
  {label: 'Winner', icon: 'trophy', route: 'Winner'},
  {label: 'My Quiz', icon: 'puzzle-piece', route: 'Quiz'},
  {label: 'Rewards', icon: 'gift', route: 'Rewards'},
  {label: 'News', icon: 'newspaper-o', route: 'News'},
]

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  tabItem: {
    alignItems: 'center',
  },
  tabText: {
    fontSize: 12,
    marginTop: 4,
    color: '#171449',
  },
})

export default Footer
