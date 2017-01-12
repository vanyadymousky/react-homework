import './active-filter.scss';

class ActiveFilter extends React.Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
    }

    toggle(event) {
        this.props.onToggleVisibility(event.target.checked)
    }

    render() {
        return <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect active-filter" htmlFor="checkbox-1">
            <input type="checkbox" id="checkbox-1"
                   onChange={this.toggle}
                   className="mdl-checkbox__input" />
            <span className="mdl-checkbox__label">
                Show active
            </span>
        </label>;
    }
}

ActiveFilter.propTypes = {
    onToggleVisibility: React.PropTypes.func
}

export default ActiveFilter;
