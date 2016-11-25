import Progress from './progress/progress';
import Controls from './controls/controls';
import Tasks from './tasks/tasks';
import SubTasks from './sub-tasks/sub-tasks';
import getUniqueId from 'src/components/utils/unique-id';

let mockCategoryId = getUniqueId();
let mockCategoryId2 = getUniqueId();
let mockCategoryId5 = getUniqueId();
let mockCategoryId6 = getUniqueId();
let mockCategoryId7 = getUniqueId();
let mockCategories = [
    {
        id: mockCategoryId,
        name: 'category1'
    },
    {
        id: mockCategoryId2,
        name: 'category2_ch_1',
        parentId: mockCategoryId
    },
    {
        id: getUniqueId(),
        name: 'category3_ch_2',
        parentId: mockCategoryId2
    },
    {
        id: getUniqueId(),
        name: 'category4_ch_2',
        parentId: mockCategoryId2
    },
    {
        id: mockCategoryId5,
        name: 'category5'
    },
    {
        id: mockCategoryId6,
        name: 'category6_ch_5',
        parentId: mockCategoryId5
    },
    {
        id: mockCategoryId7,
        name: 'category7_ch_6',
        parentId: mockCategoryId6
    },
    {
        id: getUniqueId(),
        name: 'category8_ch_7',
        parentId: mockCategoryId7
    }
];

class Body extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            taskCount: 0,
            completed: 0,
            tasks: mockCategories
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
        // if (!confirm('Sure?')) {
        //     return;
        // }
        this.setState({
            tasks: this.state.tasks.filter(task =>
            task.id !== taskId && task.parentId !== taskId)
        });
    }

    render() {
        return <main className="mdl-layout__content">
            <div className="page-content">
                <Progress progress={this.state.completed} total={this.state.taskCount}/>

                <Controls
                    onAddTask={value => this.onAddTask(value)}/>

                <div className="mdl-grid">
                    <Tasks list={this.state.tasks}
                           onDeleteTask={key => this.onDeleteTask(key)}/>

                    <SubTasks />
                </div>
            </div>
        </main>;
    }
}

export default Body;
