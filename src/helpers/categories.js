import _ from 'underscore'

export const buildCategoryBinaryTreeById = (categories, id) => {
    return _.reduce(categories, (result, category) => {
        return category.parentId === id ?
            result.concat(buildCategoryBinaryTreeById(categories, category.id)) :
            result
    }, [id])
}

export const topMostCategory = (categories) => {
    return Math.min(...Object.keys(categories))
}
