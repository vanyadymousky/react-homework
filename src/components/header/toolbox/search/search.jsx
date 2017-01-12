import './search.scss';

class Search extends React.PureComponent {

    constructor(props) {
        super(props);
        this.updateSearch = this.updateSearch.bind(this);
    }

    updateSearch(event) {
        this.props.onSearchUpdate(event.target.value);
    }

    render() {
        return <form action="#">
            <div className="mdl-textfield mdl-js-textfield search">
                <input className="mdl-textfield__input" onChange={this.updateSearch}
                       value={this.props.searchQuery} id="search-input"/>

                <label className="mdl-textfield__label" htmlFor="search-input">Search...</label>
            </div>
        </form>;
    }
}

Search.propTypes = {
    onSearchUpdate: React.PropTypes.func,
    searchQuery: React.PropTypes.string
}

export default Search;
