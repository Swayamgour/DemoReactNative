import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {useNavigation} from '@react-navigation/native'

function FilterTab () {
  const navigation = useNavigation()

  const subjects = [
    {
      name: 'Hindi',
      icon: <Ionicons name='language-outline' size={18} color='#fff' />,
      //  Navigate: 'HindiScreen',
    },
    {
      name: 'English',
      icon: <Ionicons name='book-outline' size={18} color='#fff' />,
      //  Navigate: 'EnglishScreen',
    },
    {
      name: 'Physics',
      icon: <Ionicons name='speedometer-outline' size={18} color='#fff' />,
      //  Navigate: 'PhysicsScreen',
    },
    {
      name: 'Chemistry',
      icon: <Ionicons name='flask-outline' size={18} color='#fff' />,
      //  Navigate: 'ChemistryScreen',
    },
    {
      name: 'Math',
      icon: <Ionicons name='calculator-outline' size={18} color='#fff' />,
      //  Navigate: 'MathScreen',
    },
    {
      name: 'Biology',
      icon: <Ionicons name='leaf-outline' size={18} color='#fff' />,
      //  Navigate: 'BiologyScreen',
    },
    {
      name: 'Computer',
      icon: <Ionicons name='laptop-outline' size={18} color='#fff' />,
      //  Navigate: 'ComputerScreen',
    },
  ]

  return (
    <View style={{paddingHorizontal: 15}}>
      <View style={styles.iconContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {subjects.map((item, index) => (
            <TouchableOpacity
              // onPress={() => navigation.navigate(item.Navigate)}
              key={index}
              style={styles.iconItem}>
              {item.icon}
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
    borderRadius: 10,
  },
  iconItem: {
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  iconLabel: {
    fontSize: 12,
    color: '#fff',
    marginTop: 2,
    textAlign: 'center',
    // fontWeight:500
  },
})
