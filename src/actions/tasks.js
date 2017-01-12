import { ADD_TASK, TOGGLE_TASK, UPDATE_TASK, MOVE_TASK, REMOVE_TASK, REMOVE_TASKS_BY_CATEGORY_IDS } from './action-types'

export const addTask = data => ({
    type: ADD_TASK,
    data
})

export const toggleTask = id => ({
    type: TOGGLE_TASK,
    id
})

export const updateTask = data => ({
    type: UPDATE_TASK,
    data
})

export const moveTask = (fromCategory, toCategory) => ({
    type: MOVE_TASK,
    fromCategory,
    toCategory
})

export const removeTask = id => ({
    type: REMOVE_TASK,
    id
})

export const removeTasksByCategoryIds = categoryIds => ({
    type: REMOVE_TASKS_BY_CATEGORY_IDS,
    categoryIds
})
