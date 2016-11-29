import './sub-tasks.scss';
import getUniqueId from 'src/components/utils/unique-id';
import { SubtaskData } from 'src/data/tasks';
import EditSubtask from './edit/edit';

class SubTasks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subtasks: SubtaskData,
            test: false
        };
        this.currentSubtask = SubtaskData.length && SubtaskData[0];
    }

    // To make subtasks data store from body
    static getTotalCount() {
        return SubtaskData.length;
    }

    // To make subtasks data store from body
    static getCompletedCount() {
        return SubtaskData.filter(subtask => subtask.isDone === true).length;
    }

    getCompletedSubtasks() {
        return this.state.subtasks.filter(subtask => subtask.isDone === true).length;
    }

    // MDL requirement for upgrading dynamic added elements
    componentDidUpdate() {
        componentHandler.upgradeDom();
    }

    updateProgress() {
        this.props.updateProgress(this.state.subtasks.length, this.getCompletedSubtasks());
    }

    toggleTask(subtaskId) {
        let subTask = this.state.subtasks.find(subtask => subtask.id === subtaskId);
        subTask.isDone = !subTask.isDone;
        this.updateProgress();
    }

    onEditTask(subtaskId) {
        this.editForm
            .setSubtask(this.state.subtasks.find(subtask => subtask.id === subtaskId))
            .activate();
    }

    addSubtask(name, taskId) {
        this.setState({
            subtasks: this.state.subtasks.concat({
                id: getUniqueId(),
                taskId: taskId,
                summary: name,
                description: '',
                isDone: false
            })
        });
        this.updateProgress();
    }

    updateSubtask(updatedSubtask) {
        this.setState({
            subtasks: this.state.subtasks.map(subtask => {
                if (subtask.id === updatedSubtask.id) {
                    Object.assign(subtask, updatedSubtask);
                }
                return subtask;
            })
        });
        this.updateProgress();
    }

    getByTask(taskId) {
        return this.state.subtasks.filter(subtask => subtask.taskId === taskId);
    }

    cleanSubtasks(taskIds) {
        this.setState({
            subtasks: this.state.subtasks.filter(subtask => !taskIds.includes(subtask.taskId))
        });
        this.updateProgress();
    }

    render() {
        return <div className="sub-task-container mdl-cell mdl-cell--7-col mdl-cell--12-phone">
            <EditSubtask ref={editForm => this.editForm = editForm} selected={this.currentSubtask}
                         updateSubtask={this.updateSubtask.bind(this)} />

            <table className="subtask-data-table mdl-data-table mdl-js-data-table mdl-shadow--2dp">
                <tbody>
                {this.getByTask(this.props.taskId)
                    .filter(subtask => !this.props.showActive || !subtask.isDone)
                    .filter(subtask => !this.props.search || subtask.summary.includes(this.props.search))
                    .map(subtask => {
                        let subtaskToggleId = `subtask-toggle-${subtask.id}`;
                        return <tr key={subtask.id}>
                            <td className="select-subtask mdl-data-table__cell--non-numeric">
                                <label htmlFor={subtaskToggleId}>
                                    <input type="checkbox" id={subtaskToggleId}
                                           onChange={() => this.toggleTask(subtask.id)}
                                           checked={subtask.isDone} />
                                </label>
                            </td>
                            <td className="mdl-data-table__cell--non-numeric">{subtask.summary}</td>
                            <td>
                                <button type="button" onClick={() => this.onEditTask(subtask.id)}
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

export default SubTasks;
