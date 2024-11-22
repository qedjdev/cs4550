import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";
import UnprotectedRoute from "./UnprotectedRoute";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const location = useLocation();
  return (
    <div className="pe-4">
      <UnprotectedRoute>
        <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
          <Link to="/Kanbas/Account/Signin" id="wd-course-home-link"
            className={`list-group-item ${location.pathname === "/Kanbas/Account/Signin" ? 'active' : ''} border border-0`}> Signin </Link>
        </div>
        <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
          <Link to="/Kanbas/Account/Signup" id="wd-course-home-link"
            className={`list-group-item ${location.pathname === "/Kanbas/Account/Signup" ? 'active' : ''} border border-0`}> Signup </Link>
        </div>
      </UnprotectedRoute>
      <ProtectedRoute>
        <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
          <Link to="/Kanbas/Account/Profile" id="wd-course-home-link"
            className={`list-group-item ${location.pathname === "/Kanbas/Account/Profile" ? 'active' : ''} border border-0`}> Profile </Link>
        </div>
      </ProtectedRoute>
    </div>
  );
}