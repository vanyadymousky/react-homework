import { UPDATE_SEARCH_QUERY, DROP_SEARCH_QUERY } from './action-types'

export const updateSearchQuery = searchQuery => ({
    type: UPDATE_SEARCH_QUERY,
    searchQuery
})

export const dropSearchQuery = () => ({
    type: DROP_SEARCH_QUERY
})
