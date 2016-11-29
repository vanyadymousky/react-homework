import Progress from './progress/progress';
import Controls from './controls/controls';
import Tasks from './tasks/tasks';
import SubTasks from './sub-tasks/sub-tasks';
import getUniqueId from 'src/components/utils/unique-id';
import { TaskData } from 'src/data/tasks';

class Body extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            subtaskCount: SubTasks.getTotalCount(),
            completedCount: SubTasks.getCompletedCount(),
            tasks: TaskData,
            showActive: false,
            search: '',
            currentTask: TaskData.length && TaskData[0].id
        };
    }

    onAddTask(taskName, parentId) {
        let task = {
            id: getUniqueId(),
            name: taskName
        };
        if (parentId) {
            task.parentId = parentId;
        }
        this.setState({
            tasks: this.state.tasks.concat(task)
        });
    }

    onDeleteTask(taskId) {
        if (!confirm('Sure?')) {
            return;
        }
        this.setState({
            tasks: this.state.tasks.filter(task =>
            task.id !== taskId && task.parentId !== taskId)
        });
        this.subtasks.cleanSubtasks(this.buildTaskIdTree(taskId));
    }

    buildTaskIdTree(taskId) {
        let result = [taskId];
        this.state.tasks.forEach(task => {
            if (task.parentId === taskId) {
                result = result.concat(this.buildTaskIdTree(task.id));
            }
        });
        return result;
    }

    onSelectTask(taskId) {
        this.setState({
            currentTask: taskId
        });
    }

    updateProgress(count, completed) {
        this.setState({
            subtaskCount: count,
            completedCount: completed
        });
    }

    updateShowActive(isActive) {
        this.setState({
            showActive: isActive
        });
    }

    updateSearch(search) {
        this.setState({
            search: search
        });
    }

    render() {
        return <main className="mdl-layout__content">
            <div className="page-content">
                <Progress progress={this.state.completedCount} total={this.state.subtaskCount}/>

                <Controls
                    onAddTask={this.onAddTask.bind(this)}
                    onAddSubTask={name => this.subtasks.addSubtask(name, this.state.currentTask)} />

                <div className="mdl-grid">
                    <Tasks list={this.state.tasks}
                           onSelectTask={this.onSelectTask.bind(this)}
                           onDeleteTask={this.onDeleteTask.bind(this)}/>

                    <div className="mdl-layout-spacer"></div>

                    <SubTasks ref={subtasks => this.subtasks = subtasks}
                              taskId={this.state.currentTask}
                              showActive={this.state.showActive}
                              search={this.state.search}
                              updateProgress={this.updateProgress.bind(this)} />
                </div>
            </div>
        </main>;
    }
}

export default Body;
