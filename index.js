/**
 * @format
 */

import 'react-native-gesture-handler'
 import {AppRegistry} from 'react-native';
// import App from './App';
import AuthorizationPage from './src/practices/AuthorizationPage'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import WebviewPage from './src/practices/WebviewPage'
import {name as appName} from './app.json'

export default function App() {
  return (
    <WebviewPage />
  )
}


AppRegistry.registerComponent(appName, () => App);
