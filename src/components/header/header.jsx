import './header.scss';

import Toolbox from './toolbox/toolbox';

export default class Header extends React.PureComponent {
    render() {
        return <header className="mdl-layout__header">
            <div className="mdl-layout__header-row normal-header">
                <span className="mdl-layout-title header-title">ToDo List</span>
                <div className="mdl-layout-spacer"></div>
                <Toolbox />
            </div>
        </header>;
    }
}
