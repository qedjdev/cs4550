import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/react.png" width={200} height={100}/>
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home">
              CS1234 React JS
            </Link>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>
        <br />
        <div className="wd-dashboard-course">
          <img src="/images/schizoerin.png" width={200} height={100} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/2323/Home">
              EECE2323
            </Link>
            <p className="wd-dashboard-course-title">
              Fundamentals of Schizophrenia
            </p>
            <Link to="/Kanbas/Courses/2323/Home"> Don't Go </Link>
          </div>
        </div>
        <br />
        <div className="wd-dashboard-course">
          <img src="/images/cs2.png" width={200} height={100} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/2101/Home">
              CS2 101
            </Link>
            <p className="wd-dashboard-course-title">
              Wallbang Calculus
            </p>
            <Link to="/Kanbas/Courses/2101/Home"> 260 LJ </Link>
          </div>
        </div>
        <br />
        <div className="wd-dashboard-course">
          <img src="/images/war.jpg" width={200} height={100} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/2001/Home">
              HIST2001
            </Link>
            <p className="wd-dashboard-course-title">
              Peace in the Middle East
            </p>
            <Link to="/Kanbas/Courses/2001/Home"> Join Remotely via MQ-1 Predator Drone </Link>
          </div>
        </div>
        <br />
        <div className="wd-dashboard-course">
          <img src="/images/2323cry.jpg" width={200} height={100} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/0714/Home">
              LAW0714
            </Link>
            <p className="wd-dashboard-course-title">
              E-Dating Divorce Law
            </p>
            <Link to="/Kanbas/Courses/0714/Home"> Discord Server Invite </Link>
          </div>
        </div>
        <br />
        <div className="wd-dashboard-course">
          <img src="/images/hwy9.png" width={200} height={100} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/0009/Home">
              CIVE0009
            </Link>
            <p className="wd-dashboard-course-title">
              Building Fast Roads
            </p>
            <Link to="/Kanbas/Courses/0009/Home"> Zoom </Link>
          </div>
        </div>
        <br />
        <div className="wd-dashboard-course">
          <img src="/images/latency.png" width={200} height={100} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/3700/Home">
              CS3700
            </Link>
            <p className="wd-dashboard-course-title">
              Networks & Distributed Systems - Teaching by Counterexample
            </p>
            <Link to="/Kanbas/Courses/3700/Home"> Zoom </Link>
          </div>
        </div>
      </div>
    </div>
  );
}