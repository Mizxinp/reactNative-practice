/**
 * @format
 */

import 'react-native-gesture-handler'
 import {AppRegistry} from 'react-native';
// import App from './App';
import AuthorizationPage from './src/01/AuthorizationPage'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import NavigationTestPage from './src/02/NavigationTestPage'
import {name as appName} from './app.json'

export default function App() {
  return (
    <NavigationTestPage />
  )
}


AppRegistry.registerComponent(appName, () => App);