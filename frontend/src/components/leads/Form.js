import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addLead } from "../../actions/leads";

export class Form extends Component {
  // We add a state to this component, as we want each input to be part of it
  state = {
    name: "",
    email: "",
    message: "",
  };

  static propTypes = {
      addLead: PropTypes.func.isRequired
  }

  // We also have to create the functions of onChange and of onSubmit.
  // For onChange, is going to have an event that will change (set) the state. This is an object with a target to the name of the input (name, email or message), and set it to the target value
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    // Now we are going to call the action of add lead. WE first have to create the new lead with the values
    const {name, email, message} = this.state // Those values are inside of the state
    const lead = {name, email, message} // We create the new object/lead
    this.props.addLead(lead) // Pass the lead to addLead function
  };

  // The values of the inputs have to be pulled out of the state with this.state, so we can use them above
  render() {
    const { name, email, message } = this.state;

    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Lead</h2>

        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={this.onChange}
              value={email}
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <input
              className="form-control"
              type="text"
              name="message"
              onChange={this.onChange}
              value={message}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}


// We put null as with this component we are not bringing in state, as we are simply calling an action (we do not need to bring leads back in)
// So we do not have to do maptoprops
export default connect(null, { addLead })(Form);
