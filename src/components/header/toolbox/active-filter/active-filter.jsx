import './active-filter.scss';

class ActiveFilter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showActive: false
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle(event) {
        this.setState({
            showActive: event.target.checked
        });
    }

    componentDidUpdate() {
        this.props.updateShowActive(this.state.showActive);
    }

    render() {
        return <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect active-filter" htmlFor="checkbox-1">
            <input type="checkbox" id="checkbox-1"
                   onChange={this.toggle}
                   className="mdl-checkbox__input" checked={this.state.showActive} />
            <span className="mdl-checkbox__label">
                Show active
            </span>
        </label>;
    }
}

export default ActiveFilter;
