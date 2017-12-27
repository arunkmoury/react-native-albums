import React, { Component } from 'react';
import { Text, View } from 'react-native';



class AlbumList extends Component {
  state = { albums: [] };
  componentWillMount() {
    
    //fetch('https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=881262b246e1d3f2abda8771b1a25fe3&format=json')
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => response.json())
      .then( data => this.setState({ albums: data }));
      // .then((response) => response.json())
      // .then(albums => this.setState({ albums }));
      //.catch(function(error) {
        //       console.log("Something happpened");
        //     });
    }

  render() {
    console.log(this.state);
    return (
      <View>
        <Text>AlbumList</Text>
      </View>
    );
  }
}

export default AlbumList;
