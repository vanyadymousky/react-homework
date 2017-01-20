import { combineEpics } from 'redux-observable'
import { userEpic } from './users'

export default combineEpics(
    userEpic
)
