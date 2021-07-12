import React, { Component } from "react";
import { connect } from "react-redux";

// we are going to use Proptypes
import PropTypes from "prop-types";

// Import the get_leads action
import { getLeads } from "../../actions/leads";

export class Leads extends Component {
    // Once we have the mapStateToProps, we are going to pass as props the leads
    static PropTypes = {
        // We pass the proptypes as an array, and this is required
        leads: PropTypes.array.isRequired
    }

  render() {
    return <h1>Leads list</h1>;
  }
}

// The map state we refer to the leads state, and we wannt to map it to props of the component
// In  this case, we want to leadsReducer (inside of index.js). And the leads is the part of the state we want, which is the one returned by the leads reducer.
const mapStateToProps = state => ({

    // This means that we are going to have a prop which is leads
    leads: state.leadsReducer.leads
})

// Whenever we use connect, we have to export like:
// Where we first map the state to get the props, and then connect this props to leads component
export default connect(mapStateToProps, {getLeads})(Leads);
