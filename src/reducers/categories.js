import commonReducer from './common'
import { topMostCategory } from 'src/helpers/categories'
import {
    ADD_CATEGORY,
    SELECT_CATEGORY,
    SELECT_TOPMOST_CATEGORY,
    UPDATE_CATEGORY,
    REMOVE_CATEGORY } from 'src/actions/action-types'

function updateCategory(category, data) {
    let newCategory = {
        name: data.name
    }
    if (data.parentId) {
        newCategory.parentId = data.parentId
    }
    return Object.assign({}, category, newCategory)
}

export default (state = {}, action) => {
    switch (action.type) {
        case ADD_CATEGORY:
            return commonReducer.addToFlat(state, action.data, updateCategory)

        case SELECT_CATEGORY:
            return {
                ...state,
                selected: action.id
            }

        case SELECT_TOPMOST_CATEGORY:
            return {
                ...state,
                selected: topMostCategory(state.entities)
            }

        case UPDATE_CATEGORY:
            const data = action.data
            return {
                ...state,
                entities: {
                    ...state.entities,
                    [data.id]: updateCategory(state.entities[data.id], data)
                }
            }

        case REMOVE_CATEGORY:
            return commonReducer.removeFromFlat(state, action.ids)

        default:
            return state
    }
}
