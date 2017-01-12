import './category-list.scss';

export default class CategoryList extends React.Component {

    render() {
        return <ul className="todo-categories expandable">
            {this.props.list}
        </ul>;
    }
}
