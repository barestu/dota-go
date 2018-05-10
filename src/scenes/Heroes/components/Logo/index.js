import React, { Component } from 'react';
import { Image } from 'react-native';

class Logo extends Component {
  render() {
    return (
      <Image
        source={require('./dotalogo.png')}
        style={{ width: 30, height: 30 }}
      />
    );
  }
}

export default Logo;