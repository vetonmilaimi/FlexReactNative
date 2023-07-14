import React from 'react';
import {
  Text,
} from 'react-native';
import { Button } from 'react-native-paper';
import { NavigationProp, ParamListBase } from '@react-navigation/native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


import HeaderImage from '../../components/HeaderImage';
import { PositionEnum } from '../../lib/types';
import Background from '../../components/Background';

interface Props {
  navigation: NavigationProp<ParamListBase>
}

function ConfirmationLink(props: Props): JSX.Element {
  return (
    <Background>
      <>
        <HeaderImage position={PositionEnum.first} />
        <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold", marginTop: "25%" }} onPress={() => {
          props.navigation.navigate('Login')
        }}>
          <FontAwesome5 name={'arrow-left'} solid style={{ color: '#fff' }} /> Go Home
        </Text>
        <Text style={{ color: '#fff', fontSize: 14, marginTop: '5%' }}>
          Please enter your username or email address

        </Text>
        <Text style={{ color: '#fff', fontSize: 14 }}>
          so we can send you a confirmation link.
        </Text>

        <Button style={{ width: "80%", marginTop: '5%' }} theme={{ colors: { primary: '#1DA193', onPrimary: "#fff" } }} mode="contained" onPress={() => console.log('Pressed')}>
          Confirmation Link Sent
        </Button>
      </>
    </Background>
  )
}

export default ConfirmationLink;