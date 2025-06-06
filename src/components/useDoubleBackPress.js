// hooks/useNavigationBack.js (Optional alternative approach)
import { useEffect, useRef } from 'react';
import { BackHandler, ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function useNavigationBack() {
  const navigation = useNavigation();
  const backPressTime = useRef(0);

  useEffect(() => {
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

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackPress
    );

    return () => backHandler.remove();
  }, [navigation]);
}