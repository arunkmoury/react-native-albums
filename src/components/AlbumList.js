import React, { Component } from 'react';
import { View } from 'react-native';
import AlbumDetail from './AlbumDetail'; 

class AlbumList extends Component{
	//const REQUEST_URL = 'https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=881262b246e1d3f2abda8771b1a25fe3&format=json';
	
	constructor(props){
		super(props)
		this.state = { albums: [] };
	}
	componentWillMount() {
	//fetch('https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=881262b246e1d3f2abda8771b1a25fe3&format=json')
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => response.json())
      .then( data => this.setState({ albums: data }));
		/*     ------- this is another way to fetch data
	  	.then((response) => response.json())
      	.then(albums => this.setState({ albums }));
      	.catch(function(error) {
        console.log("Something happpened");
    	});*/
	}
	
	renderAlbums(){
		return this.state.albums.map(album => 
			<AlbumDetail key={ album.title } album ={ album } />
		);	
	}

	render(){ 
		//console.log(this.state);
		
		return (
			<View>
				{this.renderAlbums()}
			</View>
		);
	}
}

export default AlbumList;