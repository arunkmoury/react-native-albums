/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import AlbumList from './src/components/AlbumList';


// components
export default class App extends Component<{}> {
  render() {
    return (
      <ScrollView>
        <Header headerText={'Albums'} />
        <AlbumList />
      </ScrollView>
    );
  }
}
