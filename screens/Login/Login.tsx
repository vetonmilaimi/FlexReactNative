import React, { useState } from 'react';
import {
  Image,
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
import Background from '../../components/Background';

interface Props {
  navigation: NavigationProp<ParamListBase>
}

function Login(props: Props): JSX.Element {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  return (
    <Background>
      <>
        <HeaderImage position={PositionEnum.first} />
        <Text style={{ color: '#fff', fontSize: 16, marginTop: "20%", fontWeight: "bold" }}>Login to your account</Text>
        <CustomInput
          placeholder='Username/Email'
        />
        <CustomInput
          placeholder='Password'
          secret
        />
        <View style={{ ...styles.flex, justifyContent: "space-between", width: "80%" }}>
          <View style={styles.flex} >
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}
              tintColors={{ true: '#0f0', false: "#fff" }}
            />
            <Text style={{ color: "#fff", fontSize: 16 }}>Remember me</Text>
          </View>
          <Text
            style={{ color: "#fff", fontSize: 14 }}
            onPress={() => {
              props.navigation.navigate('Forgot Password')
            }}
          >
            I forgot my password
          </Text>
        </View>
        <Button
          style={{ width: "80%", marginTop: '10%' }}
          theme={{ colors: { primary: 'white', onPrimary: "#000" } }}
          mode="contained"
          onPress={() => {
            props.navigation.navigate('Products')
          }}
        >
          Sign In
        </Button>
      </>
    </Background>
  );
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

export default Login