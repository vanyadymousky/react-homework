import AddItem from 'src/components/custom/add-item/add-item';

class Controls extends React.Component {

    constructor(props) {
        super(props)
        this.addTask = this.addTask.bind(this)
    }

    addTask(summary) {
        this.props.onAddTask(this.props.categoryId, summary)
    }

    render() {
        return <div className="mdl-grid todo-controls">
            <div className="mdl-cell mdl-cell--3-col mdl-cell--12-phone">
                <AddItem label="Add category" onSubmit={this.props.onAddCategory} />
            </div>
            <div className="mdl-layout-spacer"></div>
            <div className="mdl-cell mdl-cell--3-col mdl-cell--hide-phone">
                <AddItem label="Add task" onSubmit={this.addTask} />
            </div>
        </div>;
    }
}

Controls.propTypes = {
    categoryId: React.PropTypes.number,
    onAddCategory: React.PropTypes.func,
    onAddTask: React.PropTypes.func
}

export default Controls;
