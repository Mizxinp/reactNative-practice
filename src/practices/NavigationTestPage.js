import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  const [userNameText, setUserNameText] = useState()
  const handleConfirm = (value) => setUserNameText(value)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20 }}>用户名：{userNameText}</Text>
      <Button
        title="修改用户名"
        onPress={() => navigation.navigate('Details', {
          userName: userNameText,
          onConfirm: handleConfirm,
        })}
      />
    </View>
  );
}

function DetailsScreen({ route: { params }, navigation }) {
  const [userName, setUserName] = useState(params.userName)
  const handleChange = (value) => setUserName(value)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>修改用户名</Text>
      <TextInput
        style={{ borderWidth: 1, borderColor: '#666', width: 200, height: 30, marginTop: 10 }}
        value={userName}
        onChangeText={handleChange}
      />
      <Button title="确定" onPress={() => {
        params.onConfirm(userName)
        navigation.goBack()
      }} />
    </View>
  );
}

const Stack = createStackNavigator();

function NavigationTestPage() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationTestPage;