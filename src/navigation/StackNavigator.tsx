import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StarterScreen from '../screens/Starter/StarterScreen';
import NumberScreen from '../screens/auth/NumberScreen';
import VerifyPhoneNumberScreen from '../screens/auth/VerifyPhoneNumberScreen';
import HomeScreen from '../screens/base/HomeScreen';

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Starter"
          component={StarterScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Number"
          component={NumberScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="VerifyPhone"
          component={VerifyPhoneNumberScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
