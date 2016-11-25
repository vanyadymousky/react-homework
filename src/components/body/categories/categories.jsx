import './categories.scss';
import RemoveItem from 'src/components/custom/list/remove-item';

class Categories extends React.Component {

    render() {
        return <div className="mdl-grid">
            <ul className="todo-categories mdl-cell mdl-cell--3-col mdl-cell--12-phone">
                {this.props.list.map(category =>
                    <RemoveItem
                        key={category.key.toString()}
                        onRemove={this.props.onDeleteCategory}
                        category={category} />)}
            </ul>
        </div>;
    }
}

export default Categories;
