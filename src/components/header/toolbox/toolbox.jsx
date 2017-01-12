import './toolbox.scss';

import ActiveFilterContainer from './active-filter/container';
import SearchContainer from './search/container';

export default class Toolbox extends React.PureComponent {

    render() {
        return <div className="toolbox">
            <ActiveFilterContainer />
            <SearchContainer />
        </div>
    }
}
