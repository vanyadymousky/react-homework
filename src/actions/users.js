import { FETCH_USER, FULFILL_USER } from './action-types'

export const fetchUser = user => ({
    type: FETCH_USER,
    user
})

export const fulfillUser = payload => ({
    type: FULFILL_USER,
    payload
})
