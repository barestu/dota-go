import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Provider } from 'react-redux';
import store from './src/store';

import HeroesScreen from './src/scenes/Heroes';
import AboutScreen from './src/scenes/About';
import MatchesScreen from './src/scenes/Matches';
import HeroDetailsScreen from './src/scenes/Heroes/components/HeroDetails';

const HeroesStack = createStackNavigator({
  Heroes: {
    screen: HeroesScreen,
    navigationOptions: {
      title: 'Heroes'
    }
  },
  HeroDetails: {
    screen: HeroDetailsScreen
  }
},{
  initialRouteName: 'Heroes',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#263238'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: '100'
    }
  }
})

const MatchesStack = createStackNavigator({
  Matches: {
    screen: MatchesScreen,
    navigationOptions: {
      title: 'Pub Matches'
    }
  }
},{
  initialRouteName: 'Matches',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#263238'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: '100'
    }
  }
})

const AboutStack = createStackNavigator({
  About: {
    screen: AboutScreen,
    navigationOptions: {
      title: 'About'
    }
  }
},{
  initialRouteName: 'About',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#263238'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: '100'
    }
  }
})

const TabNavStack = createBottomTabNavigator({
  Heroes: HeroesStack,
  Matches: MatchesStack,
  About: AboutStack
},{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state
      let iconName

      if (routeName === 'Heroes') {
        iconName = 'ios-game-controller-b'
      } else if (routeName === 'Matches') {
        iconName = 'ios-list-box-outline'
      } else if (routeName === 'About') {
        iconName = 'ios-information-circle'
      }

      return <Ionicons name={iconName} size={25} color={tintColor} />
    }
  }),
  tabBarOptions: {
    activeTintColor: '#e53935',
    inactiveTintColor: '#546E7A',
  },
})

const RootStack = createStackNavigator({
  Main: {
    screen: TabNavStack
  }
},{
  mode: 'modal',
  headerMode: 'none'
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}