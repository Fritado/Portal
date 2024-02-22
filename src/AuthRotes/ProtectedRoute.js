import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = (props) => {
  const { Component } = props;
  const history = useHistory();

  const { token } = useSelector((state) => state.auth);

  return (
    <div>
      <Component />
    </div>
  );
};

export default ProtectedRoute;
