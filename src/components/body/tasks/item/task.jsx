import './task.scss';
import AddEditItem from 'src/components/custom/add-item/add-item';

class ListItem extends React.PureComponent {

    openAddSubTaskForm() {

    }

    openEditTaskForm() {

    }

    render() {
        return <li className="list-item">
            <div>
                {this.props.item.name}
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
