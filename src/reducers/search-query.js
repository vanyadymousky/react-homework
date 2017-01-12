import { UPDATE_SEARCH_QUERY, DROP_SEARCH_QUERY } from 'src/actions/action-types'

const DEFAULT_SEARCH_QUERY = ''

export default (state = DEFAULT_SEARCH_QUERY, action) => {
    switch (action.type) {
        case UPDATE_SEARCH_QUERY:
            return action.searchQuery

        case DROP_SEARCH_QUERY:
            return DEFAULT_SEARCH_QUERY

        default:
            return state
    }
}
