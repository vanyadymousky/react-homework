import {
    ADD_CATEGORY,
    SELECT_CATEGORY,
    SELECT_TOPMOST_CATEGORY,
    UPDATE_CATEGORY,
    REMOVE_CATEGORY } from 'src/actions/action-types'

export const addCategory = data => ({
    type: ADD_CATEGORY,
    data
})

export const selectCategory = id => ({
    type: SELECT_CATEGORY,
    id
})

export const selectTopmostCategory = () => ({
    type: SELECT_TOPMOST_CATEGORY
})

export const updateCategory = data => ({
    type: UPDATE_CATEGORY,
    data
})

export const removeCategories = ids => ({
    type: REMOVE_CATEGORY,
    ids
})
