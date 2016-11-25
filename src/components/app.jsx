import Header from './header/header';
import Footer from './footer/footer';
import Body from './body/body';

import './styles/colors.scss';

class App extends React.Component {
    render() {
        return <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <Header/>
                <Body/>
                <Footer/>
            </div>;
    }
}

export default App;
