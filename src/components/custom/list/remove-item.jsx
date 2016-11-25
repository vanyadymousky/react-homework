import './remove-item.scss';

class RemoveItem extends React.PureComponent {

    constructor(props) {
        super(props);
        this.category = this.props.category;
    }

    render() {
        return <li>{this.category.name}
            <button type="submit"
                    onClick={() => this.props.onRemove(this.category.key)}
                    className="mdl-button mdl-js-button mdl-button--icon">
                <i className="material-icons">remove</i>
            </button>
        </li>;
    }
}

export default RemoveItem;
