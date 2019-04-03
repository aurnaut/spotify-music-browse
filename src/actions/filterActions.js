import { SEARCH_EVENTS } from "./types";

export const searchEvent = events => {
    return {
        type: SEARCH_EVENTS,
        payload: events.target.value
    }

}