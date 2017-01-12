import './categories.scss';
import _ from 'underscore'
import Category from './item/container';
import CategoryList from './list/category-list';

class Categories extends React.Component {

    getCategories() {
        return this.props.categories;
    }

    getRootCategories() {
        return _.filter(this.getCategories(), category => !category.parentId)
    }

    buildCategoryTree(categories, child) {
        let list = [];

        categories.forEach(category => {
            const id = category.id
            const children = _.filter(this.getCategories(), category => category.parentId === id)

            if (child || !category.parentId) {  // If category is sub-level child or root category
                list.push(
                    <Category key={id.toString()} item={category}
                          hasChildren={!!children[0]} />
                );
            }

            if (children[0]) { // Has children
                list.push(
                    <li key={id + 'children'} data-expandable-for={id}>
                        <CategoryList list={this.buildCategoryTree(children, true)} />
                    </li>
                );
            }
        });
        return list;
    }

    render() {
        return <div className="categories-deck mdl-cell mdl-cell--4-col mdl-cell--12-phone">
            <CategoryList list={this.buildCategoryTree(this.getRootCategories())} />
        </div>;
    }
}

Categories.propTypes = {
    categories: React.PropTypes.objectOf(React.PropTypes.object)
}

export default Categories;
