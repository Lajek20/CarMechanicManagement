import React from "react";
import { Redirect, Route } from "react-router-dom";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  const username = localStorage.getItem("username");
  console.log("this", isAuthenticated);

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated==='true' && username  ? <Component {...props} /> : <Redirect to="/MainPage" />
      }
    />
  );
}

export default ProtectedRoute;