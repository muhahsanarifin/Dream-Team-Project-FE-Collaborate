import React from "react";
import { Navigate } from "react-router-dom";
import jwt from "jwt-decode";

class ReversePrivateElement extends React.Component {
  render() {
    // const { allowedRoles = ["admin"], children } = this.props;
    const { children } = this.props;
    const token = localStorage.getItem("token");
    if (token) {
      this.info = jwt(token);
    }
    if (this.info)
      return (
        <Navigate
          to="/"
          replace={true}
          state={{ msg: "You have logged in!", isRedirected: true }}
        />
      );
    // kondisi 2 = apakah sesuai dengan role
    // if (allowedRoles.length > 0)
    //   if (!allowedRoles.includes(this.info.role))
    //     return (
    //       <Navigate
    //         to="/Home"
    //         replace={true}
    //         state={{
    //           msg: "Forbidden",
    //           isRedirected: true,
    //         }}
    //       />
    //     );
    return children;
  }
}

export default ReversePrivateElement;
