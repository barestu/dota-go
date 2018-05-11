import React, { Component } from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet
} from 'react-native';

class Loading extends Component {
  render() {
    return (
      <View styles={styles.container}>
        <ActivityIndicator size="large" color="#e53935"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#37474F',
    alignItems: 'center',
    justifyContent: 'center'
  },
})

export default Loading;