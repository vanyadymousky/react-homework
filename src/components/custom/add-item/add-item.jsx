import './add-item.scss';

const ITEM_ID_TEMPLATE = 'add-item-input-';

let id = 0;

class AddItem extends React.PureComponent {

    constructor(props) {
        super(props);
        this.id = ITEM_ID_TEMPLATE + id++;
        this.onCancel = this.onCancel.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        this.props.onSubmit(this.$input.value);
        event.preventDefault();
    }

    onCancel() {
        if (typeof this.props.onCancel === 'function') {
            this.props.onCancel();
        } else {
            this.$input.value = null;
        }
    }

    render() {
        return <form onSubmit={this.handleSubmit} className="add-item-form">
            <div className="mdl-textfield mdl-js-textfield">
                <input className="mdl-textfield__input"
                       pattern="^([A-z0-9_]){1,20}$"
                       ref={input => this.$input = input}
                       defaultValue={this.props.value} id={this.id} />
                <label className="mdl-textfield__label" htmlFor={this.id}>{this.props.label}</label>
            </div>
            <div className="controls">
                <button type="submit" className="mdl-button mdl-js-button mdl-button--icon">
                    <i className="material-icons">done</i>
                </button>
                <button type="button"
                        onClick={this.onCancel}
                        className="mdl-button mdl-js-button mdl-button--icon">
                    <i className="material-icons">highlight_off</i>
                </button>
            </div>
        </form>;
    }
}

AddItem.propTypes = {
    onCancel: React.PropTypes.func,
    onSubmit: React.PropTypes.func,
    label: React.PropTypes.string
}

export default AddItem;
