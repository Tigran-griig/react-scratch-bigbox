import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import App from "./App";
import './index.css';
import {Provider} from 'react-redux'
import store from "./redux/store";
import { ApolloProvider } from '@apollo/client/react';
import {client} from "./graphQl/client";

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <Router>
        <App/>
      </Router>
    </ApolloProvider>
  </Provider>
  ,
  document.getElementById('root')
);

