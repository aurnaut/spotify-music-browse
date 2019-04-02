import React, { Component } from 'react';


class TicketMasterEvents extends Component {
    constructor(props) {
      super(props);
      this.state = {
        events: []
      };
    }

    componentDidMount() {
    var url = "https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&countryCode=UK";
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          events: Object.values(data._embedded.events)
        })
      })
    }

    render() {console.log(this.state.events)
      return (
        <ul>
          { 
            this.state.events.map((event, index) => {
              return( 
                <li key={ index }>
                  { event.name }
                </li>
              )
            }) 
          }
        </ul>
      );
    }
  }
  export default TicketMasterEvents;

