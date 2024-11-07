import { Link, useLocation, useParams } from "react-router-dom";
import { courses } from "../Database";
import PreventUnregisteredNonFaculty from "./PreventUnregisteredNonFaculty";
export default function CoursesNavigation() {
  const location = useLocation();
  const { cid } = useParams();
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link to={`/Kanbas/Courses/${cid}/${link}`} id="wd-course-home-link"
          className={`list-group-item ${location.pathname === `/Kanbas/Courses/${cid}/${link}` ? 'active' : ''} border border-0`}>{link}</Link>
      ))}
    </div>
  );
}
