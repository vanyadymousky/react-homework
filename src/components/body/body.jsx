import Progress from './progress/progress';
import Controls from './controls/controls';
import Categories from './categories/categories';
import getUniqueId from 'src/components/utils/unique-id';

class Body extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            taskCount: 0,
            completed: 0,
            categories: [
                {
                    key: getUniqueId(),
                    name: 'category1'
                },
                {
                    key: getUniqueId(),
                    name: 'category2'
                }
            ]
        };
    }

    onAddCategory(categoryName) {
        if (!this.state.categories.find(category => category.name === categoryName)) {
            this.setState({
                categories: this.state.categories.concat({
                    key: getUniqueId(),
                    name: categoryName
                })
            });
        }
    }

    onDeleteCategory(categoryKey) {
        this.setState({
            categories: this.state.categories.filter(category => category.key !== categoryKey)
        });
    }

    render() {
        return <main className="mdl-layout__content">
            <div className="page-content">
                <Progress progress={this.state.completed} total={this.state.taskCount}/>

                <Controls
                    onAddCategory={value => this.onAddCategory(value)}/>

                <Categories list={this.state.categories}
                            onDeleteCategory={key => this.onDeleteCategory(key)}/>
            </div>
        </main>;
    }
}

export default Body;
