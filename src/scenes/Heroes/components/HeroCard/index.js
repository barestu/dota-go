import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet
} from 'react-native';

class HeroCard extends Component {
  render() {
    const { hero } = this.props

    return (
      <View style={styles.container}>
        <Image
          style={styles.heroImg}
          source={{uri: 'http://cdn.dota2.com/' + hero.img}}
        />
        <Text style={styles.heroName}>{hero.localized_name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    padding: 5
  },
  heroImg: {
    width: 108,
    height: 62
  },
  heroName: {
    fontSize: 10,
    color: '#fff',
    position : 'absolute',
    bottom : 0,
    top : 45,
    left : 5,
    right : 0,
    textShadowColor: 'rgba(0, 0, 0, 0.85)',
    textShadowOffset: {width: -2, height: 2},
    textShadowRadius: 10
  }
});

export default HeroCard;