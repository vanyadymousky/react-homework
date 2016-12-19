
class EditSubtask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            taskId: 0,
            summary: 'summary',
            isDone: false,
            description: ''
        };
        this.updateSubtask = this.updateSubtask.bind(this);
        this.onSaveSubtask = this.onSaveSubtask.bind(this);
        this.hideForm = this.hideForm.bind(this);
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

    updateSubtask(property, event) {
        let value = property === 'isDone' ? event.target.checked : event.target.value;
        this.setState({
            [property]: value
        });
    }

    activate() {
        this.dialog.showModal();
    }

    hideForm() {
        this.dialog.close();
    }

    render() {
        const subtaskIsDoneId = `edit-subtask-${this.state.id}-isdone`;

        return <dialog ref={dialog => this.dialog = dialog} className="mdl-dialog">
            <form action="#" onSubmit={this.onSaveSubtask}>
                <div className="mdl-dialog__content">
                    <input type="hidden" name="id" value={this.state.id}/>
                    <div className="mdl-textfield mdl-js-textfield">
                        <input className="mdl-textfield__input"
                               placeholder="Task name..."
                               onChange={() => this.updateSubtask('summary')}
                               value={this.state.summary} type="text" />
                    </div>
                    <div>
                        <label htmlFor={subtaskIsDoneId}>
                            <input type="checkbox" id={subtaskIsDoneId} checked={this.state.isDone}
                                   onChange={() => this.updateSubtask('isDone')}/>
                            Is done
                        </label>
                    </div>
                    <div className="mdl-textfield mdl-js-textfield">
                        <textarea className="mdl-textfield__input" type="text"
                                  placeholder="Task description..."
                                  onChange={() => this.updateSubtask('description')}
                                  value={this.state.description}>
                        </textarea>
                    </div>
                </div>
                <div className="mdl-dialog__actions">
                    <button type="button" onClick={this.hideForm}
                            className="mdl-button mdl-js-button close">
                        Cancel
                    </button>
                    <button type="submit"
                            className="mdl-button mdl-js-button mdl-button--colored mdl-button__raised">
                        Save changes
                    </button>
                </div>
            </form>
        </dialog>
    }
}

export default EditSubtask;
