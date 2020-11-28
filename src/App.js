import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Result from './pages/Result'
import './App.css'

export default function App() {
  return (
      <div>
        <Switch>
          <Route path="/quiz">
            <Quiz />
          </Route>
          <Route path="/result">
            <Result />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
  );
}