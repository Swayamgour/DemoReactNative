// navigation/AppTabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { tabScreens, tabNavigatorConfig } from '../config/tabConfig';
import { useNavigation } from '@react-navigation/native';
import { BackHandler, ToastAndroid } from 'react-native';

const Tab = createBottomTabNavigator();

const withBackHandler = (WrappedComponent) => {
  return (props) => {
    const navigation = useNavigation();
    const backPressTime = React.useRef(0);

    // Handle back press based on navigation state
    const handleBackPress = () => {
      if (navigation.canGoBack()) {
        navigation.goBack();
        return true;
      }

      const now = Date.now();
      if (backPressTime.current && now - backPressTime.current < 2000) {
        BackHandler.exitApp();
        return true;
      }

      backPressTime.current = now;
      ToastAndroid.show('Press back again to exit', ToastAndroid.SHORT);
      return true;
    };

    React.useEffect(() => {
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        handleBackPress
      );

      return () => backHandler.remove();
    }, []);

    return <WrappedComponent {...props} />;
  };
};

const AppTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const screen = tabScreens.find(s => s.name === route.name);
          return <Icon name={screen.icon} size={20} color={color} />;
        },
        ...tabNavigatorConfig
      })}
    >
      {tabScreens.map((screen) => (
        <Tab.Screen
          key={screen.name}
          name={screen.name}
          component={withBackHandler(screen.component)}
          options={screen.options}
        />
      ))}
    </Tab.Navigator>
  );
};

export default AppTabs;