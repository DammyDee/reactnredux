import { FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS } from "./ProductsTypes";
import axios from "axios";

export const fetchRequest = () => {
  return {
    type: FETCH_REQUEST,
  };
};

export const fetchSuccess = (products) => {
  return {
    type: FETCH_SUCCESS,
    payload: products,
  };
};

export const fetchError = (error) => {
  return {
    type: FETCH_ERROR,
    payload: error,
  };
};

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(fetchRequest());
    try {
      const response = await axios.get("https://faketoreapi.com/products");
      const data = response.data;
      dispatch(fetchSuccess(data));
    } catch (err) {
      // console.log(err);
      dispatch(fetchError(err));
    }
  };
};
