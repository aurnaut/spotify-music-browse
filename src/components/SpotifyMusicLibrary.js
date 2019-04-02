import React, { Component } from 'react';


class SpotifyMusicLibrary extends Component {
    constructor() {
      super();
      this.state = {
        title: "Hello"
      };
    }
    render() {
      return (
        <h1>{ this.state.title }</h1>
      );
    }
  }
  export default SpotifyMusicLibrary;

