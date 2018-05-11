import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

class MatchList extends Component {
  getDuration = (value) => {
    let minutes = Math.floor(value/60)
    let seconds = value % 60 + ''

    if (seconds.length === 1) {
      seconds = `0${seconds}`
    }

    return `${minutes}:${seconds}`
  }

  render() {
    const { match } = this.props
    const heroes = this.props.heroes.data

    let radiant_team = match.radiant_team.split(',')
    let dire_team = match.dire_team.split(',')
    let radiantFiltered = heroes.filter(hero => radiant_team.includes(hero.id.toString()))
    let direFiltered = heroes.filter(hero => dire_team.includes(hero.id.toString()))

    let radiantHero = radiantFiltered.map((radiant, index) =>
      <Image
        key={index}
        style={styles.heroImg}
        source={{uri: 'http://cdn.dota2.com/' + radiant.img}}
      />
    )

    let direHero = direFiltered.map((dire, index) =>
      <Image
        key={index}
        style={styles.heroImg}
        source={{uri: 'http://cdn.dota2.com/' + dire.img}}
      />
    )

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Match ID: {match.match_id}</Text>
        <Text style={styles.text}>
          Winner: {match.radiant_win ? 'Radiant' : 'Dire'}
        </Text>
        <Text style={styles.text}>Duration: {this.getDuration(match.duration)}</Text>
        <Text style={styles.text}>Average MMR: {match.avg_mmr}</Text>

        <Text style={styles.text}>Radiant Heroes: </Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
          {radiantHero}
        </View>

        <Text style={styles.text}>Dire Heroes: </Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
          {direHero}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  heroes: state.heroes
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    margin: 5,
    alignItems: 'center',
    backgroundColor: '#212121'
  },
  text: {
    color: '#fff'
  },
  heroImg: {
    width: 60,
    height: 28,
    marginVertical: 6
  },
});

export default connect(
  mapStateToProps,
  null
)(MatchList);