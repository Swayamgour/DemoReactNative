import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // ✅ Correct import

export default function CustomNavbar() {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={() => console.log('Menu pressed')}>
        <Ionicons name="menu" size={28} color="#fff" />
        
      </TouchableOpacity>

      <Text style={styles.title}>My App</Text>

      <TouchableOpacity onPress={() => console.log('Notification pressed')}>
        <Ionicons name="notifications-outline" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: 100,
    backgroundColor: '#1976D2',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingTop: 40,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
