//this is start of the app, render root app component to dom
import React from "react";
import ReactDOM from "react-dom";
//Provider is a react component that glues redux with react
//it allows components to reach into the redux store for data anywhere in the component hierarchy 
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import App from "./components/App";
//root reducers
import reducers from './reducers';


//redux store
const store = createStore(reducers, {}, applyMiddleware());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
