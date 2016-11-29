import './tasks.scss';
import Task from './item/task';
import TaskList from './list/task-list';

class Tasks extends React.Component {

    getTasks() {
        return this.props.list;
    }

    getRootTasks() {
        return this.getTasks().filter(task => !task.parentId);
    }

    getChildren(taskId) {
        return this.getTasks().filter(task => task.parentId === taskId);
    }

    buildTaskTree(tasks, child) {
        let list = [];

        tasks.forEach(task => {
            const taskKey = task.id.toString();
            let children = this.getChildren(task.id);

            if (child || !task.parentId) {  // If task is sub-level child or root task
                list.push(
                    <Task key={taskKey} item={task}
                          onAddTask={this.props.onAddTask}
                          onEditTask={this.props.onEditTask}
                          onSelectTask={this.props.onSelectTask}
                          onRemove={this.props.onDeleteTask} />
                );
            }

            if (children[0]) { // Has children
                list.push(
                    <li key={taskKey + 'children'}>
                        <TaskList list={this.buildTaskTree(children, true)} />
                    </li>
                );
            }
        });
        return list;
    }

    render() {
        return <div className="tasks-deck mdl-cell mdl-cell--4-col mdl-cell--12-phone">
            <TaskList list={this.buildTaskTree(this.getRootTasks())} />
        </div>;
    }
}

export default Tasks;
