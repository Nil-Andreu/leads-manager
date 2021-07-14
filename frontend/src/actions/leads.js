import axios from "axios";

import { GET_LEADS } from "./types";

// We have the action method for getting leads
export const getLeads = () => (dispatch) => {
  // We are making a HTTP request to /api/leads.
  // We do it with dispatch for doing this

  // We do the http request with axios, which will return a promise we handle with .then()
  axios
    .get("/api/leads/")
    .then((res) => {
      dispatch({
        type: GET_LEADS,

        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// We want to dispatch the get leads action to the reducer (which will be evaluate din the leads reducers)
// This promise is going to give us a reponse, which we collect with .then

// So to dispatch, we pass an object
// The payload, is going to be the leads returned from the server

// The .catch is for the case taht there is some error.
