import React, { useReducer, useContext } from "react";
import reducer from "./reducer";
import { DISPLAY_ALERT } from "./actions";
const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
  };
  return (
    <AppContext.Provider value={{ ...state, displayAlert }}>
      {/* children = app */}
      {children}
    </AppContext.Provider>
  );
};

{
  /* custom hook! */
}
const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
