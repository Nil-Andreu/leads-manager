import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from "../actions/types";

// Now we create the initial state
const initialState = {
  leads: [],
};

export default function (state = initialState, action) {
  // We have to evaluate the action type
  switch (action.type) {
    case GET_LEADS:
      // In the case that it gets leads, we need to return which will be the state
      return {
        // We will spread whathever thing is in the state, which in this case will be leads: []
        ...state,

        // And we want to fill leads with the ones fetched from the server
        // which i am going to send those as a paid load in the action
        leads: action.payload,
      };

    case DELETE_LEAD:
      return {
        ...state, // WE want to obtain the current state

        // For the leads, we want to filter through, and only return the ones which are not the id lead button pressed
        // Filter is a method for an array, in which we say that for each lead we want to return anything where lead id is not the same as the one of payload
        leads: state.leads.filter((lead) => lead.id !== action.payload),
        // So we are deleting the lead, and then run the reducer to delete it in the ui
      };
    
    case ADD_LEAD:
        return {
            ...state,

            // For leads, we say that any leads inside of the state, and then in addition the new lead
            leads: [...state.leads, action.payload]
        }


    // The case by default
    default:
      return state;
  }
}
