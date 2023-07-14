import React from 'react';
import { Image } from 'react-native';
import { PositionEnum } from '../../lib/types';

interface IProps {
  position: PositionEnum
}

function HeaderImage(props: IProps): JSX.Element {
  return <Image
    source={require('../../assets/logo.png')}
    style={
      {
        alignSelf: 'center',
        marginTop: props.position
      }}
  />
}

export default HeaderImage;