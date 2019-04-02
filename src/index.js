import React from 'react';
import ReactDOM from 'react-dom';
import TicketMasterEvents from './components/TicketMasterEvents';
import index from './js/index'

const renderElement = document.getElementById('app');
renderElement ? ReactDOM.render(<TicketMasterEvents />, renderElement) : false;