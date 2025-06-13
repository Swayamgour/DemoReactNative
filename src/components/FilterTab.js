import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native'
// import Ionicons from 'react-native-vector-icons/Ionicons'
import {useNavigation} from '@react-navigation/native'
// import image from '../../src/assets/home/'

function FilterTab () {
  const navigation = useNavigation()

  const subjects = [
    {
      name: 'GK',
      icon: require('../../src/assets/home/knowledge.png'),
    },
    {
      name: 'Math',
      icon: require('../../src/assets/home/54394475-calculate-button-01.png'),
    },
    {
      name: 'Resoning',
      icon: require('../../src/assets/home/reasoning.png'),
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
              {/* {item.icon} */}
              <View style={styles.imageCoin}>
                <Image
                  source={item.icon} // Use directly from screen config
                  style={styles.image} // Use consistent styling
                  resizeMode='contain'
                />
              </View>

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
    // height: 60,
    backgroundColor: '#fff',
    // paddingHorizontal: 10,
    borderRadius: 10,
  },
  iconItem: {
    // width: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 8,
    width: '100',
    paddingVertical: 10,
    // backgroundColor: none,
  },
  iconLabel: {
    fontSize: 14,
    // color: '#fff',
    marginTop: 2,
    textAlign: 'center',
    // fontWeight:500
  },
  image: {
    // height: 40,
    width: 35,
    marginBottom: 10,

    // borderRadius: 30,
    // padding:10
  },
  imageCoin: {
    padding: 5,
    backgroundColor: '#B5C7EB',
    borderRadius: 30,
    alignItems:'center',
    justifyContent:'center',
    width:50,
    height:50
  },
})
