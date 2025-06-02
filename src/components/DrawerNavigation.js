import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Dashboard from '../screens/Dashboard'
import Profile from '../screens/Profile'
import CustomDrawerContent from './CustomDrawerContent'
import AppTabs from '../screens/AppTabs'
// import { View } from 'react-native-reanimated/lib/typescript/Animated'

const Drawer = createDrawerNavigator()

function DrawerNavigation () {
  return (
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
  )
}

export default DrawerNavigation
