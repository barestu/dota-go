import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

class HeroDetails extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state

    return {
      title: params ? params.hero.localized_name : 'No Name'
    }
  }

  render() {
    let hero = this.props.navigation.getParam('hero')
    console.log(this.props.navigation)

    return (
      <ScrollView style={styles.background}>
        <View style={styles.container}>
          <Text style={styles.heroName}>
            <Image
              style={styles.heroIcon}
              source={{uri: 'http://cdn.dota2.com/' + hero.icon}}
            />
            {`  ${hero.localized_name}`}
          </Text>
          <Image
            style={styles.heroImg}
            source={{uri: 'http://cdn.dota2.com/' + hero.img}}
          />
          <Text style={styles.contentTitle}>Primary Attributes</Text>
          <Text style={styles.textContent}>{hero.primary_attr.toUpperCase()}</Text>

          <Text style={styles.contentTitle}>Attack Type</Text>
          <Text style={styles.textContent}>{hero.attack_type}}</Text>

          <Text style={styles.contentTitle}>Attributes</Text>
          <View style={styles.content}>
            <Text style={styles.textContent}>{`${hero.base_str}+${hero.str_gain}`}</Text>
            <Text style={styles.textContent}>{`${hero.base_agi}+${hero.agi_gain}`}</Text>
            <Text style={styles.textContent}>{`${hero.base_int}+${hero.int_gain}`}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    paddingVertical: 10,
    backgroundColor: '#37474F'
  },
  container: {
    flex: 1,
    padding: 5,
    alignItems: 'center',
  },
  heroName: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#fff'
  },
  heroImg: {
    width: 216,
    height: 124,
    marginVertical: 6
  },
  heroIcon: {
    width: 40,
    height: 40,
  },
  contentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 6,
    color: '#fff'
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContent: {
    flex: 1,
    textAlign: 'center',
    color: '#fff'
  }
})

export default HeroDetails;