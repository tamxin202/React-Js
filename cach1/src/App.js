import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import routes from "./Routes";

function listRoute(routes) {
  var listRoutes = null;
  if (routes.length > 0) {
    listRoutes = routes.map((route) => (
      <Route path={route.path} exact={route.exact} component={route.main} />
    ));
  }
  return listRoutes;
}
function App() {
  return (
    <BrowserRouter>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link" href="/">
              Home <span class="sr-only">(current)</span>
            </a>
            <a class="nav-item nav-link" href="/add">
              Add
            </a>
          </div>
        </div>
      </nav>
      <Switch>{listRoute(routes)}</Switch>
    </BrowserRouter>
  );
}

export default App;
