import { AiOutlineDashboard } from "react-icons/ai";
import { LiaBookSolid, LiaCalendarAltSolid, LiaCogSolid, LiaInboxSolid } from "react-icons/lia";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import "./styles.css";

export default function KanbasNavigation() {
  const location = useLocation();

  return (
    <div id="wd-kanbas-navigation" style={{ width: 120 }}
      className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
      <a id="wd-neu-link" target="_blank"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center">
        <img src="/images/NEU.png" width="75px" /></a>

    

      <Link to="/Kanbas/Account" id="wd-account-link"
        className={`list-group-item text-center border-0 bg-black text-white`}>
        <FaRegCircleUser className={`fs-1 text-white`} /><br />
        Account </Link>

      <Link to="/Kanbas/Dashboard" id="wd-dashboard-link"
        className={`list-group-item text-center border-0 ${location.pathname === "/Kanbas/Dashboard" ? 'bg-white text-danger' : 'bg-black text-white'}`}>
        <AiOutlineDashboard className={`fs-1 text-danger`} /><br />
        Dashboard </Link>

      <Link to="/Kanbas/Courses" id="wd-course-link"
        className={`list-group-item text-center border-0 ${location.pathname === "/Kanbas/Courses" ? 'bg-white text-danger' : 'bg-black text-white'}`}>
        <LiaBookSolid className={`fs-1 text-danger`} /><br />
        Courses </Link>

      <Link to="/Kanbas/Calendar" id="wd-calendar-link"
        className={`list-group-item text-center border-0 ${location.pathname === "/Kanbas/Calendar" ? 'bg-white text-danger' : 'bg-black text-white'}`}>
        <LiaCalendarAltSolid className={`fs-1 text-danger`} /><br />
        Calendar </Link>

      <Link to="/Kanbas/Inbox" id="wd-inbox-link"
        className={`list-group-item text-center border-0 ${location.pathname === "/Kanbas/Inbox" ? 'bg-white text-danger' : 'bg-black text-white'}`}>
        <LiaInboxSolid className={`fs-1 text-danger`} /><br />
        Inbox </Link>

      <Link to="/Labs" id="wd-labs-link"
        className={`list-group-item text-center border-0 ${location.pathname === "/Labs" ? 'bg-white text-danger' : 'bg-black text-white'}`}>
        <LiaCogSolid className={`fs-1 text-danger`} /><br />
        Labs </Link>
    </div>
  );
}
