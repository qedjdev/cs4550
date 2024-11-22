import { Link } from "react-router-dom";
import * as db from "./Database";
import { useState } from "react";
import { useSelector } from "react-redux";
import FacultyOnlyComponent from "./Account/ProtectedButton";
import NonFacultyRoute from "./Account/NonFacultyRoute";

type Enrollment = {
  _id: string;
  user: string;
  course: string;
};

export default function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse, enrollInCourse, unenrollFromCourse }: {
      courses: any[]; course: any; setCourse: (course: any) => void;
      addNewCourse: () => void; deleteCourse: (course: any) => void;
      updateCourse: () => void; enrollInCourse: (courseId: any) => void;
      unenrollFromCourse: (courseId: any) => void;
    }) {

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [sessionEnrollments, setSessionEnrollments] = useState<Enrollment[]>(db.enrollments);

  const [filterEnrollments, setFilterEnrollments] = useState(false);

  const handleEnroll = (courseId: any) => {
    if (!sessionEnrollments.some(enrollment => enrollment.user === currentUser._id && enrollment.course === courseId)) {
      const newEnrollment: Enrollment = {
        _id: Date.now().toString(), // Using current timestamp as a unique ID
        user: currentUser._id,
        course: courseId,
      };
      setSessionEnrollments([...sessionEnrollments, newEnrollment]);
    }
  };

  const handleUnenroll = (courseId: any) => {
    setSessionEnrollments(
      sessionEnrollments.filter(
        enrollment => !(enrollment.user === currentUser._id && enrollment.course === courseId)
      )
    );
  };

  return (
    <div id="wd-dashboard">
      <NonFacultyRoute>
        <div>
          <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
          <button id="wd-toggle-enrollments-click"
            onClick={() => setFilterEnrollments(!filterEnrollments)}
            className="btn btn-primary me-2 float-end" >
            Enrollments
          </button>
        </div>
      </NonFacultyRoute>
      <FacultyOnlyComponent>
        <h5>New Course
          <button className="btn btn-primary float-end"
            id="wd-add-new-course-click"
            onClick={addNewCourse} > Add </button>
          <button className="btn btn-warning float-end me-2"
            onClick={updateCourse} id="wd-update-course-click">
            Update
          </button>
        </h5>
        <br />
        <input value={course.name} className="form-control mb-2" onChange={(e) => setCourse({ ...course, name: e.target.value })} />
        <textarea value={course.description} className="form-control" onChange={(e) => setCourse({ ...course, description: e.target.value })} />
        <hr />
      </FacultyOnlyComponent>
      <h2 id="wd-dashboard-published">
        Published Courses ({
          courses.filter(course =>
            !filterEnrollments ||
            sessionEnrollments.some(enrollment =>
              enrollment.user === currentUser._id && enrollment.course === course._id
            )
          ).length
        })
      </h2>
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses
            .filter(course =>
              !filterEnrollments ||
              sessionEnrollments.some(
                enrollment =>
                  enrollment.user === currentUser._id &&
                  enrollment.course === course._id
              )
            )
            .map(course => {
              const isEnrolled = sessionEnrollments.some(
                enrollment => enrollment.user === currentUser._id && enrollment.course === course._id
              );
              return (
                <div className="wd-dashboard-course col" style={{ width: "300px" }} key={course._id}>
                  <div className="card rounded-3 overflow-hidden">
                    <Link to={`/Kanbas/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark" >
                      <img src={`/images/${course._id}.jpg`} width="100%" height={160} onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/images/react.png';
                      }} />
                      <div className="card-body">
                        <h5 className="wd-dashboard-course-title card-title">
                          {course.name} </h5>
                        <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                          {course.description} </p>
                        <button className="btn btn-primary"> Go </button>
                        <NonFacultyRoute>
                          {isEnrolled && !filterEnrollments ? (
                            <button
                              onClick={(event) => {
                                event.preventDefault();
                                handleUnenroll(course._id);
                              }}
                              className="btn btn-danger float-end"
                              id="wd-unenroll-course-click"
                            >
                              Unenroll
                            </button>
                          ) : (
                            !isEnrolled && !filterEnrollments && (
                              <button
                                onClick={(event) => {
                                  event.preventDefault();
                                  handleEnroll(course._id);
                                }}
                                className="btn btn-success float-end"
                                id="wd-enroll-course-click"
                              >
                                Enroll
                              </button>
                            )
                          )}
                        </NonFacultyRoute>
                        <FacultyOnlyComponent>
                          <button onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }} className="btn btn-danger float-end"
                            id="wd-delete-course-click">
                            Delete
                          </button>
                          <button id="wd-edit-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                            }}
                            className="btn btn-warning me-2 float-end" >
                            Edit
                          </button>
                        </FacultyOnlyComponent>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
