import './add-item.scss';

const ITEM_ID_TEMPLATE = 'add-item-input-';

let id = 0;

class AddItem extends React.PureComponent {
    constructor(props) {
        super(props);
        this.id = ITEM_ID_TEMPLATE + id++;
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
        return <form onSubmit={this.handleSubmit.bind(this)} className="add-item-form">
            <div className="mdl-textfield mdl-js-textfield">
                <input className="mdl-textfield__input"
                       pattern="^([A-z0-9_]){1,20}$"
                       ref={input => this.$input = input}
                       name="task"
                       defaultValue={this.props.value}
                       type="text" id={this.id} />
                <label className="mdl-textfield__label" htmlFor={this.id}>{this.props.label}</label>
            </div>
            <button type="submit" className="mdl-button mdl-js-button mdl-button--icon">
                <i className="material-icons">done</i>
            </button>
            <button type="button"
                    onClick={this.onCancel.bind(this)}
                    className="mdl-button mdl-js-button mdl-button--icon">
                <i className="material-icons">highlight_off</i>
            </button>
        </form>;
    }
}

export default AddItem;
