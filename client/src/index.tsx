import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './redux/middleware/saga';
import rootReducer from './redux/combine_reducers';
import App from './App';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = 'object' && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'];
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  rootElement
);
