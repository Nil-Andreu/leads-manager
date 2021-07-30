import React, { Component, Fragment } from "react";

// To use the alert we have to import the following
import { withAlert } from "react-alert";

export class Alerts extends Component {
  // When component is mounted, it will show an alert
  componentDidMount() {
    this.props.alert.show("it works");
  }

  // We will not render anything, will be just the pop up
  render() {
    return <Fragment />;
  }
}

// We need to wrap the component that will have the alert
export default withAlert(Alerts);
