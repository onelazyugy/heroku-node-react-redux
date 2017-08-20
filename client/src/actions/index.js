import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => async (dispatch) => {
     /**
     * redux thunk => returns a function that makes the actual ajax request not return a regular action
     * dispatch is a function that dispatches an action once the ajax call is done
     * 
     * once the ui call the 'fetchuser' action, redux thunk return a function with a dispatch function.
     * that function will then make ajax call, once the ajax call is done, the dispatch function will
     * call ALL reducers with a type and payload
     */
    const res = await axios.get("/api/current_user");
    dispatch({ type: FETCH_USER, payload: res.data });
  };

