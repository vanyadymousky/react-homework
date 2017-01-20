import { FETCH_USER, FULFILL_USER } from 'src/actions/action-types'

export default (state = {}, action) => {

    switch (action.type) {

        case FETCH_USER:
            return {
                ...state,
                fetching: true
            }

        case FULFILL_USER:
            return {
                ...state,
                login: action.payload.login,
                id: action.payload.id,
                avatar: action.payload.avatar_url,
                fetching: false
            }

        default:
            return state
    }
}
