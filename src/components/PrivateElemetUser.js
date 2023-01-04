import React from "react";
import { Navigate } from "react-router-dom";
import jwt from "jwt-decode";

class PrivateElementUser extends React.Component {
  render() {
    const { allowedRoles = ["customer"], children } = this.props;
    // const { children } = this.props;
    const token = localStorage.getItem("token");
    if (token) {
      this.info = jwt(token);
    }
    console.log(this.info);
    if (!this.info)
      return (
        <Navigate
          to="/Login"
          replace={true}
          state={{ msg: "Silahkan Login Terlebih Dahulu", isRedirected: true }}
        />
      );
    // kondisi 2 = apakah sesuai dengan role
    if (allowedRoles.length > 0)
      if (!allowedRoles.includes(this.info.role))
        return (
          <Navigate
            to="/"
            replace={true}
            state={{
              msg: "Forbidden",
              isRedirected: true,
            }}
          />
        );
    return children;
  }
}

export default PrivateElementUser;
