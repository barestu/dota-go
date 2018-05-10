import React, { Component } from 'react';
import axios from 'axios';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image 
} from 'react-native'

class About extends Component {
  render() {
    return (
      <View>
        <Text>About Page</Text>
        <Button
          title="Go To Home"
          onPress={() => this.props.navigation.push('Home')}
        />
      </View >
    );
  }
}

export default About