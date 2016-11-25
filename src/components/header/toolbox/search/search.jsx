import './search.scss';

class Search extends React.Component {
    render() {
        return <form action="#">
            <div className="mdl-textfield mdl-js-textfield search">
                <input className="mdl-textfield__input" type="text" id="sample1"/>
                <label className="mdl-textfield__label" htmlFor="sample1">Search...</label>
            </div>
        </form>;
    }
}

export default Search;
