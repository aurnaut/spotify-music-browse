import React from 'react';
import ReactDOM from 'react-dom';
import SpotifyMusicLibrary from './components/SpotifyMusicLibrary';

const renderElement = document.getElementById('app');
renderElement ? ReactDOM.render(<SpotifyMusicLibrary />, renderElement) : false;