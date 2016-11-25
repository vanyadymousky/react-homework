import './add-item.scss';

const ITEM_ID_TEMPLATE = 'add-item-input-';

let id = 0;

class AddItem extends React.PureComponent {
    constructor(props) {
        super(props);
        this.id = ITEM_ID_TEMPLATE + id++;
    }

    handleSubmit(event) {
        this.props.onSubmit(event.target.elements['category'].value);
        event.preventDefault();
    }

    render() {
        return <form onSubmit={this.handleSubmit.bind(this)} className="add-item-form">
            <div className="mdl-textfield mdl-js-textfield">
                <input className="mdl-textfield__input" name="category" type="text" id={this.id} />
                <label className="mdl-textfield__label" htmlFor={this.id}>{this.props.label}</label>
            </div>
            <button type="submit" className="mdl-button mdl-js-button mdl-button--icon">
                <i className="material-icons">add</i>
            </button>
        </form>;
    }
}

export default AddItem;
