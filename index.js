/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// Top of index.js
import 'react-native-gesture-handler';
import 'react-native-reanimated'; // ✅ MUST be before any navigation or gesture components

AppRegistry.registerComponent(appName, () => App);
