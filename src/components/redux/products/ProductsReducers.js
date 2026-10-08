import { FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS } from "./ProductsTypes";

const initialState = {
  loading: false,
  products: [],
  error: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: null,
      };
    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
