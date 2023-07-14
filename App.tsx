import React, { useEffect, useState } from 'react';

import { NavigationContainer, NavigationProp, ParamListBase } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import ForgotPassword from './screens/ForgotPassword';
import ConfirmationLink from './screens/ConfirmationLink';
import Products from './screens/Products';

const Stack = createNativeStackNavigator();

interface Props {
  navigation: NavigationProp<ParamListBase>
}

function App(props: Props): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Login'
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Forgot Password'
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Confirmation Link"
          component={ConfirmationLink}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Products'
          component={Products}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );

}



export default App;
