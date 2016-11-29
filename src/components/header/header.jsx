import './header.scss';

import Toolbox from './toolbox/toolbox';

class Header extends React.Component {
    render() {
        return <header className="mdl-layout__header">
            <div className="mdl-layout__header-row normal-header">
                <span className="mdl-layout-title header-title">ToDo List</span>
                <div className="mdl-layout-spacer"></div>
                <Toolbox updateSearch={this.props.updateSearch} updateShowActive={this.props.updateShowActive} />
            </div>
        </header>;
    }
}

export default Header;
