
import App from 'src/components/app';
import About from 'src/pages/about';
import NotFound from 'src/pages/page-404';
import { Router, Route, hashHistory } from 'react-router'
import ReactDOM from 'react-dom';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="*" component={NotFound} />
    </Router>,
    document.getElementById('root')
);
