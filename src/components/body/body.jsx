import ProgressContainer from './progress/container';
import ControlsContainer from './controls/container';
import CategoriesContainer from './categories/container';
import TasksContainer from './tasks/container';

class Body extends React.Component {

    onDeleteTask(categoryId) {
        if (!confirm('Sure?')) {
            return;
        }
        this.setState({
            categories: this.state.categories.filter(category => category.id !== categoryId && category.parentId !== categoryId)
        });
        this.tasks.cleanTasks(this.buildCategoryIdTree(categoryId));
    }

    buildCategoryIdTree(categoryId) {
        let result = [categoryId];
        this.state.categories.forEach(category => {
            if (category.parentId === categoryId) {
                result = result.concat(this.buildCategoryIdTree(category.id));
            }
        });
        return result;
    }

    render() {
        return <main className="mdl-layout__content">
            <div className="page-content">
                <ProgressContainer />
                <ControlsContainer />

                <div className="mdl-grid">
                    <CategoriesContainer />
                    <div className="mdl-layout-spacer"></div>
                    <TasksContainer />
                </div>
            </div>
        </main>;
    }
}

export default Body;
