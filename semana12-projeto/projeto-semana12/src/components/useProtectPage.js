import React, { useEffect } from "react";
import { useHistory, Route } from "react-router-dom";


function ProtectedRoute(props) {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      history.push("/login");
    }
  }, []);

  return (
    <Route exact={props.exact} path={props.path}>
      {props.children}
    </Route>
  );
}

export default ProtectedRoute;
