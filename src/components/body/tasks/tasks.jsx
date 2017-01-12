import './tasks.scss';
import EditTask from './edit/edit';

class Tasks extends React.Component {

    onEditTask(taskId) {
        this.editForm
            .setTask(this.state.tasks.find(task => task.id === taskId))
            .activate();
    }

    storeTask(event, taskId) {
        event.dataTransfer.setData('taskId', taskId)
        console.log(event.dataTransfer)
    }

    render() {
        return <div className="task-container mdl-cell mdl-cell--7-col mdl-cell--12-phone">
            {/*<EditTask ref={editForm => this.editForm = editForm}*/}
                         {/*updateTask={this.updateTask} />*/}

            <table className="task-data-table mdl-data-table mdl-js-data-table mdl-shadow--2dp">
                <tbody>
                {this.props.tasks
                    .map(task => {
                        const taskToggleId = `task-toggle-${task.id}`;
                        return <tr key={task.id} draggable="true" onDragStart={event => this.storeTask(event, task.id)}>
                            <td className="select-task mdl-data-table__cell--non-numeric">
                                <label htmlFor={taskToggleId}>
                                    <input type="checkbox" id={taskToggleId}
                                           onChange={() => this.props.onToggleTask(task.id)}
                                           defaultChecked={task.isDone} />
                                </label>
                            </td>
                            <td className="mdl-data-table__cell--non-numeric">{task.summary}</td>
                            <td>
                                <button type="button" onClick={() => this.onEditTask(task.id)}
                                        className="edit-task mdl-button mdl-js-button mdl-button--icon">
                                    <i className="material-icons">mode_edit</i>
                                </button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>;
    }
}

Tasks.propTypes = {
    onToggleTask: React.PropTypes.func,
    tasks: React.PropTypes.arrayOf(React.PropTypes.object)
}

export default Tasks;
