import axios from "axios";

import { GET_LEADS } from "./types";

// We have the action method for getting leads
export const getLeads = () => (dispatch) => {
  // We are making a HTTP request to /api/leads.
  // We do it with dispatch for doing this

  // We do the http request with axios, which will return a promise we handle with .then()
  axios
    .get("/api/leads/")
    // This promise is going to give us a reponse
    .then((res) => {
      // We want to dispatch the get leads action to the reducer (which will be evaluate din the leads reducers)
      // So to dispatch, we pass an object
      dispatch({
        type: GET_LEADS,

        // The payload, is going to be the leads returned from the server
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
  // The .catch is for the case taht there is some error.
};
