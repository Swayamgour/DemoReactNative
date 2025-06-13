// config/tabConfig.js
export const tabScreens = [
  {
    name: 'Dashboard',
    component: require('../screens/Dashboard').default,
    icon: require('../../src/assets/home/courses-01.png'),  // Use require() instead of string path
    options: {headerShown: false},
  },
  {
    name: 'Winner',
    component: require('../screens/WinnerPage').default,
    icon: require('../../src/assets/home/winnings-01.png'),  // Use require() for all icons
    options: {headerShown: false},
  },
  {
    name: 'Quiz',
    component: require('../screens/MyQuizPage').default,
    icon: require('../../src/assets/home/Home-01.png'),
    options: {headerShown: false},
  },
  {
    name: 'Rewards',
    component: require('../screens/RewordPage').default,
    icon: require('../../src/assets/home/ReferEarn-01.png'),
    options: {headerShown: false},
  },
  {
    name: 'News',
    component: require('../screens/News').default,
    icon: require('../../src/assets/home/News-01.png'),
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
    height: 70,
  },
}