import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchHeroes } from '../../store/heroes/actions';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableHighlight
} from 'react-native';

import FormModal from '../../components/FormModal';
import HeroCard from './components/HeroCard';

class Heroes extends Component {
  componentDidMount() {
    this.props.fetchHeroes()
  }

  render() {
    const { data, loading, error } = this.props.heroes

    return (
      <View style={styles.container}>
        {
          loading ? <Text>Loading...</Text> :
          error.status ? <Text>Oops, something wrong</Text> :
          <FlatList
            numColumns={3}
            data={data}
            keyExtractor={(item, index) => index}
            renderItem={({item}) => 
              <TouchableHighlight onPress={() => {
                this.props.navigation.navigate('HeroDetails', {hero: item})
              }}>
                <HeroCard hero={item} />
              </TouchableHighlight>
            }
          />
        }
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  heroes: state.heroes
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchHeroes
}, dispatch)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#37474F'
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Heroes);