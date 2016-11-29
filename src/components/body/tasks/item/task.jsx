import './task.scss';
import InlineEdit from 'src/components/custom/inline-edit/inline-edit';

class Task extends React.Component {
    constructor(props) {
        super(props);
    }

    openAddNestedTaskForm() {
        this.inlineAddNested.activate();
    }

    openEditTaskForm() {
        this.inlineEdit.activate();
    }

    selectTask(event, taskId) {
        event.preventDefault();
        this.props.onSelectTask(taskId);
    }

    addNestedTask(parentId, name) {
        this.props.onAddTask(name, parentId);
    }

    render() {
        let item = this.props.item;
        return <li className="list-item">
            <InlineEdit ref={inlineEdit => this.inlineEdit = inlineEdit}
                        onSubmit={this.props.onEditTask}
                        id={item.id} value={item.name} />

            <InlineEdit ref={inlineEdit => this.inlineAddNested = inlineEdit}
                        onSubmit={this.addNestedTask.bind(this, item.id)}
                        value={`${item.name}_sub`} />

            <div>
                <a href="#" onClick={event => this.selectTask(event, item.id)}>{item.name}</a>
                <button type="button"
                        className="edit-task mdl-button mdl-js-button mdl-button--icon"
                        onClick={this.openEditTaskForm.bind(this, item.id)}>
                    <i className="material-icons">mode_edit</i>
                </button>
            </div>
            <div>
                <button type="button"
                        className="mdl-button mdl-js-button mdl-button--icon"
                        onClick={() => this.props.onRemove(item.id)}>
                    <i className="material-icons">delete_forever</i>
                </button>
                <button type="submit"
                        className="mdl-button mdl-js-button mdl-button--icon"
                        onClick={this.openAddNestedTaskForm.bind(this, item.id)}>
                    <i className="material-icons">add</i>
                </button>
            </div>
        </li>;
    }
}

export default Task;
