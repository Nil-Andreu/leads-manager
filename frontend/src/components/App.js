import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Header from "./layout/Header";
import Dashboard from "./leads/Dashboard";

import Alerts from "./layout/Alerts";

// We bring in the alert provider
import { Provider as AlertProvider } from "react-alert"; //Provider with an alias as we have the one of the redux
import AlertTemplate from "react-alert-template-basic";

import { Provider } from "react-redux";
import store from "../store";

// Alert options (which will be spreader inside of the AlertProvider insnide of App Component)
const options = {
  timeout: 3000, // in miliseconds
  position: "top center", //where is going to apper the alert
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...options}>
          <Fragment>
            <Header />
            <Alerts />
            <div className="container">
              <Dashboard />
            </div>
          </Fragment>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
