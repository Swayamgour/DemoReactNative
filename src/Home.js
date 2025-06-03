// src/Home.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from './screens/Dashboard';
import Profile from './screens/ProfilePage'; // Create this file

const Drawer = createDrawerNavigator();

export default function Home() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerPosition: 'left',
        drawerStyle: {
          backgroundColor: '#171449',
          width: 250,
        },
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#aaa',
      }}
    >
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="Profile" component={Profile} />
      {/* Add more screens here */}
    </Drawer.Navigator>
  );
}