import React, { useEffect } from "react";
import { TodoList } from "./components/TodoList";
import { Store } from "./components/Reducer";
import "./App.css";

const App: React.FC = () => {
  const { state, dispatch } = React.useContext(Store);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const result = {
      episodes: ["zyz", "zyz", "zyz"],
      favourites: ["abc", "abc", "abc"]
    };

    return dispatch({
      type: "FETCH_DATA",
      payload: result
    });
  };

  return (
    <div className="App">
      <TodoList />
      {console.log(state)}
    </div>
  );
};

export default App;
