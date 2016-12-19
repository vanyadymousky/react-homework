import './search.scss';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
        this.updateSearch = this.updateSearch.bind(this);
    }

    updateSearch(event) {
        this.setState({
            search: event.target.value
        });
    }

    componentDidUpdate() {
        this.props.updateSearch(this.state.search);
    }

    render() {
        return <form action="#">
            <div className="mdl-textfield mdl-js-textfield search">
                <input className="mdl-textfield__input" onChange={this.updateSearch}
                       value={this.state.search} type="text" id="sample1"/>
                <label className="mdl-textfield__label" htmlFor="sample1">Search...</label>
            </div>
        </form>;
    }
}

export default Search;
