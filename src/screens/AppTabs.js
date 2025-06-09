// navigation/AppTabs.js
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'
import {tabScreens, tabNavigatorConfig} from '../config/tabConfig'
import {useNavigation} from '@react-navigation/native'
import {BackHandler, ToastAndroid} from 'react-native'

const Tab = createBottomTabNavigator()

const withBackHandler = WrappedComponent => {
  return props => {
    const navigation = useNavigation()
    const backPressTime = React.useRef(0)

    // Handle back press based on navigation state
    const handleBackPress = () => {
      if (navigation.canGoBack()) {
        navigation.goBack()
        return true
      }

      const now = Date.now()
      if (backPressTime.current && now - backPressTime.current < 2000) {
        BackHandler.exitApp()
        return true
      }

      backPressTime.current = now
      ToastAndroid.show('Press back again to exit', ToastAndroid.SHORT)
      return true
    }

    React.useEffect(() => {
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        handleBackPress,
      )

      return () => backHandler.remove()
    }, [])

    return <WrappedComponent {...props} />
  }
}

const AppTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          const {icon} =
            tabScreens.find(screen => screen.name === route.name) || {}
          return <Icon name={icon} size={18} color={color} />
        },
        tabBarActiveTintColor: '#171449',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {fontSize: 12, marginBottom: 5},
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderColor: '#ddd',
          height: 70,
          paddingVertical: 8,
        },
        headerShown: false,
      })}>
      {tabScreens.map(screen => (
        <Tab.Screen
          key={screen.name}
          name={screen.name}
          component={withBackHandler(screen.component)}
          options={screen.options}
        />
      ))}
    </Tab.Navigator>
  )
}

export default AppTabs
