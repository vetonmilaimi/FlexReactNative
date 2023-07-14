import React, { useState } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { Button } from 'react-native-paper';

import { NavigationProp, ParamListBase } from '@react-navigation/native'

import HeaderImage from '../../components/HeaderImage';
import { PositionEnum } from '../../lib/types';
import CustomInput from '../../components/CustomInput';

interface Props {
  navigation: NavigationProp<ParamListBase>
}

function ForgotPassword(props: Props): JSX.Element {
  return (
    <SafeAreaView style={{ backgroundColor: '#1E3445', flex: 1, alignItems: 'center' }} >
      <HeaderImage position={PositionEnum.first} />
      <Text style={{ color: '#fff', fontSize: 16, marginTop: "20%", fontWeight: "bold" }}>
        You've forgotten your password?
      </Text>
      <CustomInput
        placeholder='Username/Email'
      />
      <Text style={{ color: '#fff', fontSize: 14, marginTop: '5%' }}>
        Please enter your username or email address

      </Text>
      <Text style={{ color: '#fff', fontSize: 14 }}>
        so we can send you a confirmation link.
      </Text>

      <Button style={{ width: "80%", marginTop: '5%' }} theme={{ colors: { primary: 'white', onPrimary: "#000" } }} mode="contained" onPress={() => console.log('Pressed')}>
        Send Confirmation Link
      </Button>

      <Text style={{ color: "#fff", fontSize: 14, fontWeight: "bold", marginTop: "15%" }} onPress={() => {
        props.navigation.navigate('Login')
      }}>
        <FontAwesome5 name={'arrow-left'} solid style={{ color: '#fff' }} /> Go Back
      </Text>
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    width: "80%",
    borderRadius: 5,
    marginTop: '5%'
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5
  }
});

export default ForgotPassword;