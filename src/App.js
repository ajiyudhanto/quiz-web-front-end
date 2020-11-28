import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home'
import Quiz from './pages/Quiz'

export default function App() {
  return (
      <div>
        <Switch>
          <Route path="/quiz">
            <Quiz />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
  );
}