import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false, 
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        username: action.payload.username,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        username: null,
      };
    default:
      return state;
  }
};

const globalState = configureStore({
  reducer: rootReducer,
});

export default globalState;