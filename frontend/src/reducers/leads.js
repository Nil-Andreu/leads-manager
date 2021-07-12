import { GET_LEADS } from '../actions/types'

// Now we create the initial state
const initialState = {
    leads: []
}

export default function(state = initialState, action) {
    // We have to evaluate the action type
    switch(action.type) {
        case GET_LEADS:
            // In the case that it gets leads, we need to return which will be the state
            return {
                // We will spread whathever thing is in the state, which in this case will be leads: []
                ...state,

                // And we want to fill leads with the ones fetched from the server
                // which i am going to send those as a paid load in the action
                leads: action.payload
            }

        // The case by default
        default:
            return state;
    }
}