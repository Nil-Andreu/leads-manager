import axios from "axios";

import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from "./types";

// GET LEADS
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


// DELETE LEADS
export const deleteLead = (id) => (dispatch) => {
  // This function has an id, as we want to know which one to delete

  axios
    .delete(`/api/leads/${id}/`) //We obtain the leads we want to delete
    .then((res) => {
      dispatch({
        type: DELETE_LEAD,

        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

// ADD LEADS
export const addLead = (lead) => (dispatch) => {

  axios
    .post(`/api/leads/`, lead) 
    .then((res) => {
      dispatch({
        type: ADD_LEAD,

        payload: res.data, // When we add a new lead, the data that comes back is the new id, name, ... of the lead 
      });
    })
    .catch((err) => console.log(err));
};