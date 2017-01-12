import { UPDATE_VISIBILITY } from 'src/actions/action-types'
import { SHOW_ALL } from 'src/actions/visibility-filter'

export default (state = SHOW_ALL, action) => {
    switch (action.type) {
        case UPDATE_VISIBILITY:
            return action.visibilityFilter

        default:
            return state
    }
}
