import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

// we are going to use Proptypes
import PropTypes from "prop-types";

// Import the get_leads action
import { getLeads, deleteLead } from "../../actions/leads";

export class Leads extends Component {
  // Once we have the mapStateToProps, we are going to pass as props the leads
  static propTypes = {
    // We pass the proptypes as an array of the leads, and this is required
    leads: PropTypes.array.isRequired,

    // And also the functions that are going to be used we pass them as proptypes (good practices)
    getLeads: PropTypes.func.isRequired,
    deleteLead: PropTypes.func.isRequired
  };

  // We want to call the getLeads action when the component loads. This way we make the request
  componentDidMount() {
    this.props.getLeads(); // We call to the getLeads action from props that we passed with connection
  }
  // Going to make a table with the leads property and use the map function to go throught this array .map(i => (what we want to do for each i))
  render() {
    return (
      <Fragment>
        <h2>Leads</h2>
        <table className="table table-stripped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.leads.map(lead => (
              <tr key={lead.id}>
                <td>{lead.id}</td>
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.message}</td>
                <td>
                  <button className="btn btn-danger btn-sm" onClick={this.props.deleteLead.bind(this, lead.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

// The map state we refer to the leads state, and we wannt to map it to props of the component
// In  this case, we want to leadsReducer (inside of index.js). And the leads is the part of the state we want, which is the one returned by the leads reducer.
const mapStateToProps = (state) => ({
  // This means that we are going to have a prop which is leads
  leads: state.leadsReducer.leads,
});

// Whenever we use connect, we have to export like:
// Where we first map the state to get the props, and then connect this props to leads component
export default connect(mapStateToProps, { getLeads, deleteLead })(Leads);
// We are mapping the state, as well as passing the action of getLeads when Leads component is called
// This action will be called when the component is rendered
