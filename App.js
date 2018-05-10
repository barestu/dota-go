import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Provider } from 'react-redux';
import store from './src/store';

import HeroesScreen from './src/scenes/Heroes';
import AboutScreen from './src/scenes/About';
import HeroDetailsScreen from './src/scenes/Heroes/components/HeroDetails';
import FormModal from './src/components/FormModal';

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

const TabNavStack = createBottomTabNavigator({
  Heroes: HeroesStack,
  About: AboutScreen
},{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state

      return <Ionicons name="ios-list-box-outline" size={25} color={tintColor} />
    }
  })
})

const RootStack = createStackNavigator({
  Main: {
    screen: TabNavStack
  },
  FormModal: {
    screen: FormModal
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