import { combineEpics } from 'redux-observable'
import { fulfillUser } from 'src/actions/users'
import { FETCH_USER } from 'src/actions/action-types'
import { getUser } from 'src/providers/users'

const fetchUserEpic = action$ => action$
    .ofType(FETCH_USER)
    .mergeMap(action => getUser(action.user))
    .map(payload => fulfillUser(payload))

export const userEpic = combineEpics(
    fetchUserEpic
)
