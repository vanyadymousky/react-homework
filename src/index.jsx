
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReactDOM from 'react-dom'
import { createEpicMiddleware } from 'redux-observable'
import rootEpic from './epics'

import rootReducer from 'src/reducers'
import App from 'src/components/app'
import Data from './data/state-schema'

let store = createStore(rootReducer, Data, applyMiddleware(
    createEpicMiddleware(rootEpic)
))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

window.document.addEventListener('loaded', function () {
   console.log('were done');
});
