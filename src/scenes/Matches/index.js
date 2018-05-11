import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMatches } from '../../store/matches/actions';
import {
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';

import MatchItem from './components/MatchItem';
import Loading from '../../components/Loading';

class Matches extends Component {
  componentDidMount() {
    this.props.fetchMatches()
  }

  render() {
    const { data, loading, error } = this.props.matches

    return (
      <View style={styles.container}>
        {
          loading ? <Loading /> :
          error.status ? <Text>Oops, something wrong</Text> :
          <FlatList
            data={data}
            keyExtractor={(item, index) => item.match_id.toString()}
            renderItem={({item}) => <MatchItem match={item} />}
          />
        }
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  matches: state.matches
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchMatches
}, dispatch)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#37474F',
    justifyContent: 'center'
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Matches);