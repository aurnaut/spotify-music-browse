import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEvents } from '../../actions/eventActions';

class EventList extends Component {

  componentDidMount() {
    this.props.fetchEvents()
  }

  render() {
    const eventItems = this.props.events.map(event => (
      <li key={event.id}>
        <h2>{event.name}</h2>
        <p>{event.dates.start.localDate + " - " + event.dates.start.localTime}</p>
      </li>
    ));

    return (
      <ul>
        {eventItems}
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  events: state.events.items
});

export default connect(mapStateToProps, { fetchEvents })(EventList);

