import './task-list.scss';

class TaskList extends React.Component {

    render() {
        return <ul className="todo-tasks expandable" ref={list => this.list = list}>
            {this.props.list}
        </ul>;
    }
}

export default TaskList;
