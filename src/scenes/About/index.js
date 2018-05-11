import React, { Component } from 'react';
import axios from 'axios';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 24, color: '#fff'}}>About Page</Text>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#37474F',
    alignItems: 'center',
  }
});

export default About