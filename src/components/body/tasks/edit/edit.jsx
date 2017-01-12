
class EditTask extends React.Component {
    constructor(props) {
        super(props);
        this.hideForm = this.hideForm.bind(this)
    }

    getTask() {
        return this.props.task
    }

    activate() {
        this.dialog.showModal()
    }

    hideForm() {
        this.dialog.close()
    }

    render() {
        const id = this.getTask().id
        const taskIsDoneId = `edit-task-form`

        return <dialog ref={dialog => this.dialog = dialog} className="mdl-dialog">
            <form action="#" onSubmit={this.onSaveSubtask}>
                <div className="mdl-dialog__content">
                    <input type="hidden" name="id" value={id}/>
                    <div className="mdl-textfield mdl-js-textfield">
                        <input className="mdl-textfield__input"
                               placeholder="Task name..."
                               onChange={() => this.updateSubtask('summary')}
                               value={this.getTask().summary} type="text" />
                    </div>
                    <div>
                        <label htmlFor={taskIsDoneId}>
                            <input type="checkbox" id={taskIsDoneId} checked={this.getTask().isDone}
                                   onChange={() => this.updateSubtask('isDone')}/>
                            Is done
                        </label>
                    </div>
                    <div className="mdl-textfield mdl-js-textfield">
                        <textarea className="mdl-textfield__input" type="text"
                                  placeholder="Task description..."
                                  onChange={() => this.updateSubtask('description')}
                                  value={this.getTask().description}>
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

EditTask.propTypes = {
    task: React.PropTypes.object
}

export default EditTask;
