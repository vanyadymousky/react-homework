import { connect } from 'react-redux'
import { buildCategoryBinaryTreeById } from 'src/helpers/categories'
import * as actionCreators from 'src/actions/categories'
import { removeTasksByCategoryIds, moveTask } from 'src/actions/tasks'
import Category from './category'
import _ from 'lodash'

const mapStateToProps = (state, ownProps) => ({
    categories: state.categories.entities,
    isActive:   state.categories.selected === ownProps.item.id,
    taskCount:  _.filter(state.tasks.entities, task => task.categoryId === ownProps.item.id && !task.isDone).length
})

const mapDispatchToProps = (dispatch, ownProps) => {
    const id = ownProps.item.id
    return {
        selectCategory:   () => dispatch(actionCreators.selectCategory(id)),
        addCategory:      name => dispatch(actionCreators.addCategory({ name, parentId: id })),
        updateCategory:   name => dispatch(actionCreators.updateCategory({ name, id })),
        removeCategories: (categories, id) => {
            const categoryIdsToRemove = buildCategoryBinaryTreeById(categories, id)
            dispatch(actionCreators.removeCategories(categoryIdsToRemove))
            dispatch(removeTasksByCategoryIds(categoryIdsToRemove))
            dispatch(actionCreators.selectTopmostCategory())
        },
        moveTask:         taskId => dispatch(moveTask(taskId, id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Category)
