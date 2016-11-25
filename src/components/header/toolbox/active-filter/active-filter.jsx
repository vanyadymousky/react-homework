import './active-filter.scss';

class ActiveFilter extends React.Component {

    render() {
        return <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect active-filter" htmlFor="checkbox-1">
            <input type="checkbox" id="checkbox-1" className="mdl-checkbox__input" defaultChecked />
            <span className="mdl-checkbox__label">
                Show active
            </span>
        </label>;
    }
}

export default ActiveFilter;
