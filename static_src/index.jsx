import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'; // ConnectedRouter заменяет BrowserRouter, для подключения Redux к роутеру
import createHistory from 'history/createBrowserHistory';
import App from './components/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import initStore from './utils/store';
import { PersistGate } from 'redux-persist/integration/react';

//import './style.css';

const history = createHistory(); //история браузера, например переход по старелкам
const middleware = routerMiddleware(history);
const { store, persistor } = initStore([middleware]);

ReactDOM.render(  //routerMiddleware передаем в additionalRouters
    <Provider store={ store }> 
     <PersistGate loading={ null } persistor={ persistor }>
        <ConnectedRouter history={history}> 
            <MuiThemeProvider>
                <App />
            </MuiThemeProvider>
        </ConnectedRouter> 
       </PersistGate>
    </Provider>
    , document.getElementById('root')
);