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

          <Text style={styles.contentTitle}>Attributes</Text>
          <View style={styles.content}>
            <Text style={styles.textContent}>
              <Image
                source={require('./assets/40px-Strength_attribute_symbol.png')}
                style={{ width: 30, height: 30 }}
              />
              {` ${hero.base_str}+${hero.str_gain}`}
            </Text>
            <Text style={styles.textContent}>
              <Image
                source={require('./assets/40px-Agility_attribute_symbol.png')}
                style={{ width: 30, height: 30 }}
              />
              {` ${hero.base_agi}+${hero.agi_gain}`}
            </Text>
            <Text style={styles.textContent}>
              <Image
                source={require('./assets/40px-Intelligence_attribute_symbol.png')}
                style={{ width: 30, height: 30 }}
              />
              {` ${hero.base_int}+${hero.int_gain}`}
            </Text>
          </View>

          <Text style={styles.contentTitle}>Primary Attributes</Text>
          <Text style={styles.textContent}>{hero.primary_attr.toUpperCase()}</Text>

          <Text style={styles.contentTitle}>Attack Type</Text>
          <Text style={styles.textContent}>{hero.attack_type}</Text>

          <Text style={styles.contentTitle}>Base Stats</Text>
          <Text style={styles.textContent}>Base Damage: {hero.base_attack_min+'-'+hero.base_attack_max}</Text>
          <Text style={styles.textContent}>Movement Speed: {hero.move_speed}</Text>
          <Text style={styles.textContent}>Attack Range: {hero.attack_range}</Text>
          <Text style={styles.textContent}>Projectile Speed: {hero.projectile_speed}</Text>
          <Text style={styles.textContent}>Turn Rate: {hero.turn_rate}</Text>
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