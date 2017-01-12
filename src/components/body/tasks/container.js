import { connect } from 'react-redux'
import _ from 'underscore'

import Tasks from './tasks'
import { addTask, toggleTask, updateTask, removeTask } from 'src/actions/tasks'
import { SHOW_ALL } from 'src/actions/visibility-filter'

const mapStateToProps = state => ({
    tasks: _.filter(state.tasks.entities, task =>
        task.categoryId === state.categories.selected && (
            !state.searchQuery || task.summary.includes(state.searchQuery)) && (
                state.visibilityFilter === SHOW_ALL || !task.isDone)
    )
})

const mapDispatchToProps = dispatch => ({
    onAddTask: data => dispatch(addTask(data)),
    onToggleTask: id => dispatch(toggleTask(id)),
    onUpdateTask: data => dispatch(updateTask(data)),
    onRemoveTask: id => dispatch(removeTask(id))
})

const TaskContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Tasks)

export default TaskContainer
