import './task.scss';
import AddEditItem from 'src/components/custom/add-item/add-item';

class ListItem extends React.Component {

    openAddSubTaskForm() {

    }

    openEditTaskForm() {

    }

    selectTask(event, taskId) {
        event.preventDefault();
        this.props.onSelectTask(taskId);
    }

    render() {
        return <li className="list-item">
            <div>
                <a href="#" onClick={event => this.selectTask(event, this.props.item.id)}>{this.props.item.name}</a>
                <button type="button"
                        className="edit-task mdl-button mdl-js-button mdl-button--icon"
                        onClick={() => this.openEditTaskForm(this.props.item.id)}>
                    <i className="material-icons">mode_edit</i>
                </button>
            </div>
            <div>
                <button type="button"
                        className="mdl-button mdl-js-button mdl-button--icon"
                        onClick={() => this.props.onRemove(this.props.item.id)}>
                    <i className="material-icons">delete_forever</i>
                </button>
                <button type="submit"
                        className="mdl-button mdl-js-button mdl-button--icon"
                        onClick={() => this.openAddSubTaskForm(this.props.item.id)}>
                    <i className="material-icons">add</i>
                </button>
            </div>
        </li>;
    }
}

export default ListItem;
