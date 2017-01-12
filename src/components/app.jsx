import 'material-design-lite/dist/material.css';
import 'material-design-lite/dist/material.blue-green.min.css';
import 'material-design-lite';

import Header from './header/header';
import Footer from './footer/footer';
import Body from './body/body';

import './styles/defaults.scss';

export default class App extends React.Component {

    render() {
        return <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <Header />
                <Body />
                <Footer/>
            </div>;
    }
}
