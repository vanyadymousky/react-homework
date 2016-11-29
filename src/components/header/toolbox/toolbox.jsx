import './toolbox.scss';

import ActiveFilter from './active-filter/active-filter';
import Search from './search/search';

class Toolbox extends React.Component {

    render() {
        return <div className="toolbox">
            <ActiveFilter updateShowActive={this.props.updateShowActive} />
            <Search updateSearch={this.props.updateSearch} />
        </div>
    }
}

export default Toolbox;
