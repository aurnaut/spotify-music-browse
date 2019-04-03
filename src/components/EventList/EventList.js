import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEvents } from '../../actions/eventActions';
import { searchEvent } from '../../actions/filterActions';
import './EventList.css';

class EventList extends Component {

  componentDidMount() {
    this.props.fetchEvents()
  }

  render() {
    const eventItems = this.props.events.map(event => (
      <li key={event.id}>
        <div className='title-date-wrap'>
          <h2>{event.name}</h2>
          <p>{new Date(event.dates.start.localDate).toDateString() + " - " + event.dates.start.localTime}</p>
        </div>
        <img src={event.images[8].url} alt={event.name} />
      </li>
    ));

    return (
      <ul>
        {eventItems}
      </ul>
    )
  }
}

const mapStateToProps = state => {
  if (state.filterReducer) {
    return {
      events: state.events.items.filter(filtered => {
        if (filtered.name.toLowerCase().indexOf(state.filterReducer) > -1) {
          return filtered;
        }
      })
    };
  } else {
    return {
      events: state.events.items
    };
  }
}

export default connect(mapStateToProps, { fetchEvents })(EventList);

