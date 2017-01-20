import './category.scss'
import Button from 'src/components/custom/buttons/button'
import InlineEdit from 'src/components/custom/inline-edit/inline-edit'
import Collapse from 'src/components/custom/collapse/collapse'

const DRAG_ENTER = 'drag-enter'

class Category extends React.Component {
    constructor(props) {
        super(props)
        this.removeCategory = () => confirm('Sure?') && props.removeCategories(props.categories, props.item.id)
        this.activateAddCategory = () => this.inlineAddNested.activate()
        this.activateInlineEdit = () => this.inlineEdit.activate()
        this.highlightDraggedTo = this.highlightDraggedTo.bind(this)
        this.dropHighlightDraggedOut = this.dropHighlightDraggedOut.bind(this)
    }

    getCollapse() {
        if (this.props.hasChildren) {
            return <Collapse block={`[data-expandable-for="${this.props.item.id}"]`} expanded={false} />
        }
    }

    dropHighlightDraggedOut(event) {
        this.categoryElement.classList.toggle(DRAG_ENTER)
        if (event.screenX === 0) {
            console.log(event.dataTransfer.getData('taskId'))
            this.props.moveTask()
        }
    }

    highlightDraggedTo() {
        this.categoryElement.classList.toggle(DRAG_ENTER)
    }

    render() {
        let item = this.props.item

        return <li ref={categoryElement => this.categoryElement = categoryElement}
                   className={(this.props.isActive ? "active" : "") + " list-item"}
                   onDragEnter={this.highlightDraggedTo}
                   onDragLeave={this.dropHighlightDraggedOut}>

            <InlineEdit ref={inlineEdit => this.inlineEdit = inlineEdit}
                        onSubmit={this.props.updateCategory} value={item.name} />

            <InlineEdit ref={inlineEdit => this.inlineAddNested = inlineEdit}
                        onSubmit={this.props.addCategory}
                        value={`${item.name}_sub`} />

            <div>
                {this.getCollapse()}
                <a href="#" onClick={this.props.selectCategory}>{item.name}</a>
                <Button icon="mode_edit" onClick={this.activateInlineEdit} />
            </div>
            <div>
                {this.props.taskCount}
                <Button icon="delete_forever" onClick={this.removeCategory} />
                <Button icon="add" onClick={this.activateAddCategory} />
            </div>
        </li>
    }
}

Category.propTypes = {
    item: React.PropTypes.object,
    hasChildren: React.PropTypes.bool,
    categories: React.PropTypes.objectOf(React.PropTypes.object),
    updateCategory: React.PropTypes.func,
    selectCategory: React.PropTypes.func,
    removeCategories: React.PropTypes.func,
    addCategory: React.PropTypes.func
}

export default Category
