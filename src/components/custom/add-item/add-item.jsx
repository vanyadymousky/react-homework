import './add-item.scss';

const ITEM_ID_TEMPLATE = 'add-item-input-';

let id = 0;

class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.id = ITEM_ID_TEMPLATE + id++;
        this.hiddenFields = this.props.hiddenFields || [];
    }

    handleSubmit(event) {
        this.props.onSubmit(this.$input.value);
        event.preventDefault();
    }

    render() {
        return <form onSubmit={this.handleSubmit.bind(this)} className="add-item-form">
            {this.hiddenFields.map(hidden => <input type="hidden" name={hidden.name} value={hidden.value} />)}
            <div className="mdl-textfield mdl-js-textfield">
                <input className="mdl-textfield__input"
                       pattern="^([A-z0-9_]){1,20}$"
                       ref={input => this.$input = input}
                       name="task"
                       type="text" id={this.id} />
                <label className="mdl-textfield__label" htmlFor={this.id}>{this.props.label}</label>
            </div>
            <button type="submit" className="mdl-button mdl-js-button mdl-button--icon">
                <i className="material-icons">done</i>
            </button>
            <button type="button"
                    onClick={() => this.$input.value = null}
                    className="mdl-button mdl-js-button mdl-button--icon">
                <i className="material-icons">highlight_off</i>
            </button>
        </form>;
    }
}

export default AddItem;
