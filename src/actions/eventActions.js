import { FETCH_EVENTS } from './types'

const URL = 'https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&countryCode=UK';
export const fetchEvents = () => dispatch => {
    fetch(URL)
        .then(response => response.json())
        .then(events => {
            const eventsFormated = events._embedded.events;
            dispatch({
                type: FETCH_EVENTS,
                payload: eventsFormated
            })
        })
}