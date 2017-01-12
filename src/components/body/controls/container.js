import { connect } from 'react-redux'
import { addTask } from 'src/actions/tasks'
import { addCategory } from 'src/actions/categories'
import Controls from './controls'

const mapStateToProps = state => ({
    categoryId: state.categories.selected
})

const mapDispatchToProps = dispatch => ({
    onAddCategory: name => dispatch(addCategory({ name })),
    onAddTask: (categoryId, summary) => dispatch(addTask({
        categoryId,
        summary
    }))
})

const ControlsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Controls)

export default ControlsContainer
