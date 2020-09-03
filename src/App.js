import React from "react";
import { Provider } from "react-redux";
import makeStore from "./store";
import Main from "./components/Main";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <Provider store={makeStore}>
      <Main />
    </Provider>
  );
}

export default App;
