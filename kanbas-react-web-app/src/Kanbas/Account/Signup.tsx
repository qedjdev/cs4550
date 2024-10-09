import React from "react";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
    <h3>Signup</h3>
    <input id="wd-username" placeholder="username" className="form-control mb-1"/>
    <input id="wd-password" placeholder="password" type="password" className="form-control"/>
    <Link id="wd-signin-btn" to="/Kanbas/Account/Profile" className="btn btn-primary w-100 mt-1 mb-1">
      Sign up
    </Link>
    <Link id="wd-signup-link" to="/Kanbas/Account/Signin">
      Signin
    </Link>
  </div>
);}