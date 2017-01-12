import commonReducer from './common'
import { ADD_TASK, UPDATE_TASK, MOVE_TASK, REMOVE_TASK, REMOVE_TASKS_BY_CATEGORY_IDS, TOGGLE_TASK } from 'src/actions/action-types'

function updateTask(task, data) {
    return {
        ...task,
        categoryId:  data.categoryId || task.categoryId,
        summary:     data.summary || task.summary || '',
        description: data.description || task.description || '',
        isDone:      data.isDone === undefined ? task.isDone : data.isDone
    }
}

export default (state = {}, action) => {
    let newState = { ...state }
    switch (action.type) {
        case ADD_TASK:
            return commonReducer.addToFlat(state, action.data, updateTask)

        case UPDATE_TASK:
            return {
                ...state,
                entities: {
                    ...state.entities,
                    [action.id]: updateTask(state.entities[action.id], action.data)
                }
            }

        case MOVE_TASK:
            return {
                ...state,
                entities: {
                    ...state.entities,
                    [action.id]: updateTask(state.entities[action.id], )
                }
            }

        case REMOVE_TASKS_BY_CATEGORY_IDS:
            return commonReducer.removeFromFlat(state, action.categoryIds, 'categoryId')

        case REMOVE_TASK:
            return commonReducer.removeFromFlat(state, [action.id])

        case TOGGLE_TASK:
            newState.entities[action.id].isDone = !newState.entities[action.id].isDone
            return newState

        default:
            return state
    }
}
