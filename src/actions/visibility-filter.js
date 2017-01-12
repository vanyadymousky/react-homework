import { UPDATE_VISIBILITY } from 'src/actions/action-types'

export const SHOW_ALL = 'SHOW_ALL'

export const SHOW_ACTIVE = 'SHOW_ACTIVE'

export const toggleVisibility = visibilityFilter => ({
    type: UPDATE_VISIBILITY,
    visibilityFilter
})
