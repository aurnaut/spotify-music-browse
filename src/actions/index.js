import { GET_EVENTS } from '../constants/action-types'

export function getTicketMasterEvents(payload) {
    return { type: GET_EVENTS, payload }
}