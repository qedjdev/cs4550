import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-2">
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-2 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
                <img src="/images/react.png" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS1234 React JS</h5>
                  <p className="wd-dashboard-course-title card-text">
                    Full Stack software developer
                  </p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-2 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/2323/Home">
                <img src="/images/schizoerin.png" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">EECE2323</h5>
                  <p className="wd-dashboard-course-title card-text">
                  Fundamentals of Schizophrenia
                  </p>
                  <button className="btn btn-primary">Dissociate</button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-2 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/2101/Home">
                <img src="/images/cs2.png" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS2101</h5>
                  <p className="wd-dashboard-course-title card-text">
                  Wallbang Calculus
                  </p>
                  <button className="btn btn-primary">260 LJ</button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-2 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/2001/Home">
                <img src="/images/war.jpg" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">HIST2001</h5>
                  <p className="wd-dashboard-course-title card-text">
                  Peace in the Middle East
                  </p>
                  <button className="btn btn-primary">MQ-1 Drone Feed</button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-2 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/0714/Home">
                <img src="/images/2323cry.jpg" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">LAW0714</h5>
                  <p className="wd-dashboard-course-title card-text">
                  E-Dating Divorce Law
                  </p>
                  <button className="btn btn-primary">Discord</button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-2 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/0009/Home">
                <img src="/images/hwy9.png" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CIVE0009</h5>
                  <p className="wd-dashboard-course-title card-text">
                  Building Fast Roads
                  </p>
                  <button className="btn btn-primary">Race</button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-2 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/0009/Home">
                <img src="/images/latency.png" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS3700</h5>
                  <p className="wd-dashboard-course-title card-text">
                  Networks & Distributed Systems
                  </p>
                  <button className="btn btn-primary">Connect</button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}