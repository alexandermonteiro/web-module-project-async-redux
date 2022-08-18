export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCESS";

import axios from "axios";

export const getGifs = (searchTerm) => {
  return (dispatch) => {
    dispatch(fetchStart());
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=Z0O4FKOUV8ihRvNKQ9qIHEVScVUcLVMJ&q=${searchTerm}`
      )
      .then((res) => {
        dispatch(fetchSuccess(res.data.data));
      });
  };
};

export const fetchStart = () => {
  return { type: FETCH_START };
};

export const fetchSuccess = (gifs) => {
  return { type: FETCH_SUCCESS, payload: gifs };
};
