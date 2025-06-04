import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import {useNavigation} from '@react-navigation/native' // ✅ Import the hook

function FilterTab () {
  const navigation = useNavigation()

  let array = [
    {
      name: 'Home',
      icon: <Ionicons name='home-outline' size={22} color='#fff' />,
      Navigate: 'DrawerNavigation',
    },
    {
      name: 'Courses',
      icon: <Ionicons name='book-outline' size={22} color='#fff' />,
      Navigate: 'Profile',
    },
    {
      name: 'Profile',
      icon: <Ionicons name='person-outline' size={22} color='#fff' />,
      Navigate: 'Profile',
    },
    {
      name: 'Chat',
      icon: <Ionicons name='chatbubble-outline' size={22} color='#fff' />,
      Navigate: 'Profile',
    },
    {
      name: 'Stats',
      icon: <Ionicons name='bar-chart-outline' size={22} color='#fff' />,
      Navigate: 'Profile',
    },
    {
      name: 'Help',
      icon: <Ionicons name='help-circle-outline' size={22} color='#fff' />,
      Navigate: 'Profile',
    },

    {
      name: 'More',
      icon: <Ionicons name='ellipsis-horizontal' size={22} color='#fff' />,
      Navigate: 'Profile',
    },
  ]

  return (
    <View style={{paddingHorizontal: 15}}>
      <View style={styles.iconContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {array?.map((item, index) => (
            <TouchableOpacity
              onPress={() => navigation.navigate(item.Navigate)}
              key={index}
              style={styles.iconItem}>
              {/* {item.icon} */}
              <Text style={styles.iconLabel}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  )
}

export default FilterTab

const styles = StyleSheet.create({
  iconContainer: {
    height: 60,
    backgroundColor: '#171449',
    paddingHorizontal: 10,
    color: '#fff',
    // marginHorizontal:15,
    borderRadius:10,
    // paddingHorizontal:15
    // paddingHorizontal: 15
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
