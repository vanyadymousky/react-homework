import './toolbox.scss';

import ActiveFilter from './active-filter/active-filter';
import Search from './search/search';

class Toolbox extends React.Component {

    render() {
        return <div className="toolbox">
            <ActiveFilter />
            <Search />
        </div>
    }
}

export default Toolbox;
