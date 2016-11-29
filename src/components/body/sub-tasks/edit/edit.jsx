import './edit.scss';

class EditSubtask extends React.Component {
    constructor(props) {
        super(props);
        let subtaskSelected = this.props.selected;
        this.state = Object.assign({}, subtaskSelected);
    }

    setSubtask(subtask) {
        this.setState(Object.assign(this.state, subtask));
        return this;
    }

    onSaveSubtask(event) {
        this.props.updateSubtask(this.state);
        this.hideForm();
        event.preventDefault();
    }

    cancelEdit() {
        this.hideForm();
    }

    hideForm() {
        this.editForm.classList.add('invisible');
    }

    updateSubtask(property, event) {
        let value = property === 'isDone' ? event.target.checked : event.target.value;
        let updateState = {
            [property]: value
        };
        this.setState(updateState);
    }

    activate() {
        this.editForm.classList.remove('invisible');
    }

    render() {
        const subtaskSummaryId = `edit-subtask-${this.state.id}-summary`,
            subtaskIsDoneId = `edit-subtask-${this.state.id}-isdone`,
            subtaskDescriptionId = `edit-subtask-${this.state.id}-description`;

        return <div ref={editForm => this.editForm = editForm} className="edit-sub-task invisible">
            <form action="#" onSubmit={this.onSaveSubtask.bind(this)}>
                <input type="hidden" name="id" value={this.state.id} />
                <div className="mdl-textfield mdl-js-textfield">
                    <input className="mdl-textfield__input"
                           onChange={this.updateSubtask.bind(this, 'summary')}
                           value={this.state.summary} type="text" id={subtaskSummaryId}/>
                    <label className="mdl-textfield__label" htmlFor={subtaskSummaryId}>Task name...</label>
                </div>
                <div>
                    <label htmlFor={subtaskIsDoneId}>
                        <input type="checkbox" id={subtaskIsDoneId} checked={this.state.isDone}
                               onChange={this.updateSubtask.bind(this, 'isDone')} />
                        Is done
                    </label>
                </div>
                <div className="mdl-textfield mdl-js-textfield">
                    <textarea className="mdl-textfield__input" type="text"
                              onChange={this.updateSubtask.bind(this, 'description')}
                              value={this.state.description}
                              id={subtaskDescriptionId}></textarea>
                    <label className="mdl-textfield__label" htmlFor={subtaskDescriptionId}>Task description...</label>
                </div>
                <div>
                    <button type="submit"
                            className="save-changes mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
                        Save changes
                    </button>
                    <button type="button" onClick={this.cancelEdit.bind(this)}
                            className="mdl-button mdl-js-button mdl-button--raised">
                        Cancel
                    </button>
                </div>
            </form>
        </div>;
    }
}

export default EditSubtask;
