import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Dashboard from '../screens/Dashboard'
import Profile from '../screens/ProfilePage'
import CustomDrawerContent from './CustomDrawerContent'
import AppTabs from '../screens/AppTabs'
import {StatusBar, View} from 'react-native'
// import { View } from 'react-native-reanimated/lib/typescript/Animated'

const Drawer = createDrawerNavigator()

function DrawerNavigation () {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            backgroundColor: 'transparent', // Avoids the default full-height background
          },
        }}
        drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name='AppTabs' component={AppTabs} />
      </Drawer.Navigator>
    </>
  )
}

export default DrawerNavigation
