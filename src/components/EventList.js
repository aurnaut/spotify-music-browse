import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { events: state.events }
}

const ConnectedEventList = ({ events }) => (
  <ul className='list-group list-group-flush'>
    { events.map( event => (
      <li className='list-group-item' key={ event.id }>
        { event.title }
      </li>
    ))
    }
  </ul>
);

const EventList = connect(mapStateToProps)(ConnectedEventList);

export default EventList;

