import './controls.scss';
import AddItem from 'src/components/custom/add-item/add-item';

class Controls extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="mdl-grid todo-controls">
            <div className="mdl-cell mdl-cell--3-col mdl-cell--12-phone">
                <AddItem label="Add task" onSubmit={this.props.onAddTask} />
            </div>
            <div className="mdl-layout-spacer"></div>
            <div className="mdl-cell mdl-cell--3-col mdl-cell--hide-phone">
                <AddItem label="Add subtask" onSubmit={this.props.onAddSubTask} />
            </div>
        </div>;
    }
}

export default Controls;
