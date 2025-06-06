// config/tabConfig.js
import Icon from 'react-native-vector-icons/FontAwesome'

export const tabScreens = [
    {
      name: 'Dashboard',
      component: require('../screens/Dashboard').default,
      icon: 'home',
      options: { headerShown: false }
    },
  {
    name: 'Winner',
    component: require('../screens/WinnerPage').default,
    icon: 'trophy',
    options: {headerShown: false},
  },
  {
    name: 'Quiz',
    component: require('../screens/MyQuizPage').default,
    icon: 'puzzle-piece',
    options: {headerShown: false},
  },
  {
    name: 'Rewards',
    component: require('../screens/RewordPage').default,
    icon: 'gift',
    options: {headerShown: false},
  },
  {
    name: 'News',
    component: require('../screens/News').default,
    icon: 'newspaper-o',
    options: {headerShown: false},
  },
]

export const tabNavigatorConfig = {
  activeTintColor: '#171449',
  inactiveTintColor: 'gray',
  labelStyle: {fontSize: 10, marginBottom: 5},
  style: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 8,
    height:70,
  },
}
