import React from "react";
import { Route, Switch, Swtich } from "react-router-dom";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={AirLine} />
    </Switch>
  );
};

export default App;
