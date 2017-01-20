import {
    ADD_TASK, TOGGLE_TASK, UPDATE_TASK, MOVE_TASK, REMOVE_TASK, REMOVE_TASKS_BY_CATEGORY_IDS, START_DRAG_TASK
} from './action-types'

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

export const moveTask = toCategory => ({
    type: MOVE_TASK,
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

export const startDragTask = id => ({
    type: START_DRAG_TASK,
    id
})
