/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


// components
export default class App extends Component<{}> {
  render() {
    return (
      <View>
        <Header headerText={'Albums'} />
        <AlbumList />
      </View>
    );
  }
}
