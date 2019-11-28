import React, { createContext, useReducer } from "react";

export interface IState {
  episodes: [];
  favourites: [];
}

interface IAction {
  type: string;
  payload: any;
}

const initState: IState = {
  episodes: [],
  favourites: []
};

export const Store = createContext<IState | any>(initState);

const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        episodes: action.payload.episodes,
        favourites: action.payload.favourites
      };
    default:
      return state;
  }
};

export const Reducer: React.FC = props => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
};
