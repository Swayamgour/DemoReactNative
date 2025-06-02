// AppTabs.js or Navigation.js
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'
import Dashboard from './Dashboard'
import WinnerPage from './WinnerPage'
import MyQuizPage from './MyQuizPage'
import RewordPage from './RewordPage'
import News from './News'

const Tab = createBottomTabNavigator()

const AppTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: true,
        tabBarIcon: ({color, size}) => {
          let iconName

          if (route.name === 'Dashboard') iconName = 'home'
          else if (route.name === 'Winner') iconName = 'trophy'
          else if (route.name === 'Quiz') iconName = 'puzzle-piece'
          else if (route.name === 'Rewards') iconName = 'gift'
          else if (route.name === 'News') iconName = 'newspaper-o'

          return <Icon name={iconName} size={20} color={color} />
        },
        tabBarActiveTintColor: '#171449',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {fontSize: 10, marginBottom: 5},
        // headerShown: false, // Hide top header if you want
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderColor: '#ddd',
          paddingVertical: 8,
          height: 70,
        },
      })}>
      <Tab.Screen
        name='Dashboard'
        component={Dashboard}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name='Winner'
        component={WinnerPage}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name='Quiz'
        component={MyQuizPage}
        options={{headerShown: false}}

        // options={{tabBarLabel: 'My Quiz'}}
      />
      <Tab.Screen
        name='Rewards'
        component={RewordPage}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name='News'
        component={News}
        options={{headerShown: false}}

        // options={{title: 'News'}}
      />
    </Tab.Navigator>
  )
}

export default AppTabs
