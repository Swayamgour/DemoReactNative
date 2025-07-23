// App.js
import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import WelcomePage from './src/screens/WelcomePage'
import Login from './src/screens/Login'
import Dashboard from './src/screens/Dashboard'
import DrawerNavigation from './src/components/DrawerNavigation'
import {SafeAreaView, StatusBar} from 'react-native'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import WinnerPage from './src/screens/WinnerPage'
import MyQuizPage from './src/screens/MyQuizPage'
import RewordPage from './src/screens/RewordPage'
import News from './src/screens/News'
import AppTabs from './src/screens/AppTabs'
import {Provider} from 'react-redux'
import {store} from './src/services/store'
import Wallet from './src/screens/Wallet'
import ChooseAmount from './src/screens/ChooseAmount'
import PaymentMethod from './src/screens/PaymentMethod'
import RegistrationPage from './src/screens/RegistrationPage'
import EventDetailScreen from './src/screens/EventDetailScreen'
import ProfilePage from './src/screens/ProfilePage'
import NotificationPage from './src/screens/NotificationPage'
import SplashScreen from './src/components/SplashScreen'
import Tab from './src/components/Tab'
import AddCash from './src/components/AddCash'
import InviteEarnPage from './src/screens/InviteEarnPage'
import WithdrawPage from './src/screens/WithdrawPage'
import KYCScreen from './src/screens/KYCScreen'
import Welcome from './src/screens/Welcome'
import EWLLogin from './src/screens/EWLLogin'
import EWLVerify from './src/screens/EWLVerify'
import RegistrationForm from './src/screens/RegistrationForm'
import TodoList from './src/screens/TodoList'
import SearchPage from './src/components/SearchPage'
import ChatWithUs from './src/components/ChatWithUs'

const Stack = createNativeStackNavigator()

export default function App () {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        {/* <StatusBar barStyle='light-content' /> */}

        <NavigationContainer>
          {/* <AppTabs /> */}
          <Stack.Navigator initialRouteName='Splash'>
            <Stack.Screen
              name='Tab'
              component={Tab}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name='Splash'
              component={SplashScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name='Welcome'
              component={Welcome}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name='Login'
              component={EWLLogin}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name='otp'
              component={EWLVerify}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name='reg'
              component={RegistrationForm}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name='Registration'
              component={RegistrationPage}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name='Dashboard'
              component={Dashboard}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name='DrawerNavigation'
              component={DrawerNavigation}
              options={{headerShown: false}}
            />

            <Stack.Screen
              name='Wallet'
              component={Wallet}
              options={{
                title: 'Wallet',
                headerStyle: {
                  // backgroundColor: '#171449',
                },
                headerTintColor: '#171449',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
            <Stack.Screen
              name='ChooseAmount'
              component={ChooseAmount}
              options={{
                title: 'Choose Amount',
                headerStyle: {
                  // backgroundColor: '#171449',
                },
                headerTintColor: '#171449',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
            <Stack.Screen
              name='PaymentMethod'
              component={PaymentMethod}
              options={{
                title: 'Select Payment',
                headerStyle: {
                  // backgroundColor: '#171449',
                },
                headerTintColor: '#171449',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
            <Stack.Screen
              name='EventDetailScreen'
              component={EventDetailScreen}
              options={{title: 'Event Details'}} // optional
            />
            <Stack.Screen
              name='Profile'
              component={ProfilePage}
              options={{title: 'Profile '}} // optional
            />
            <Stack.Screen
              name='Notification'
              component={NotificationPage}
              options={{headerShown: false}} // optional
            />
            <Stack.Screen
              name='AddCash'
              component={AddCash}
              options={{title: 'Notification '}} // optional
            />
            <Stack.Screen
              name='Invite'
              component={InviteEarnPage}
              // options={{title: 'Invite  & Earn '}} // optional
              options={{title: 'Invite & Earn'}}
            />
            <Stack.Screen
              name='Withdraw'
              component={WithdrawPage}
              // options={{title: 'Invite  & Earn '}} // optional
              options={{title: 'Withdraw'}}
            />
            <Stack.Screen
              name='kycPage'
              component={KYCScreen}
              // options={{title: 'Invite  & Earn '}} // optional
              options={{title: 'Kyc Page'}}
            />
            <Stack.Screen
              name='todo'
              component={TodoList}
              // options={{title: 'Invite  & Earn '}} // optional
              options={{title: 'Kyc Page'}}
            />

            <Stack.Screen
              name='SearchPage'
              component={SearchPage}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name='ChatWithUs'
              component={ChatWithUs}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  )
}
