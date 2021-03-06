import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PageContainer from "./page/page"
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import redux_store from './store/reducer/index'
import { Provider } from "react-redux";

const store = redux_store()




ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Provider store={store}>
              <PageContainer/>
          </Provider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
