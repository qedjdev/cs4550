import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setAssignments, deleteAssignment } from "./reducer";
import { BsTrash, BsThreeDotsVertical } from "react-icons/bs";
import { FaMagnifyingGlass, FaTrash } from "react-icons/fa6";
import * as client from "./client";
import LessonControlButtons from "../Modules/LessonControlButtons";
import FacultyOnlyComponent from "../../Account/ProtectedButton";
import { MdOutlineAssignment } from "react-icons/md";
import { IoEllipsisVertical } from "react-icons/io5";
import AssignmentControlButtons from "./AssignmentControls";

interface Assignment {
  _id: string;
  title: string;
  course: string;
  description?: string;
  dueDate?: string;
  points?: number;
}

export default function Assignments() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const splitPath = pathname.split('/');
  const courseId = splitPath[splitPath.length - 2];

  const { assignments } = useSelector((state: any) => {
    return state.assignmentsReducer;
  });

  const fetchAssignments = async () => {
    const assignments = await client.findAssignmentsForCourse(courseId);
    dispatch(setAssignments(assignments));
  };

  useEffect(() => {
    if (courseId) {
      fetchAssignments();
    }
  }, [courseId]);

  const handleDelete = async (assignmentId: string) => {
    if (window.confirm("Are you sure you want to delete this assignment?")) {
      await client.deleteAssignment(assignmentId);
      dispatch(deleteAssignment(assignmentId));
    }
  };

  return (
    <div id="wd-assignments" className="container">
      <div className="row align-items-center mb-3">
        <div className="col-4 position-relative">
          <div className="input-group">
            <span className="input-group-text bg-transparent">
              <FaMagnifyingGlass />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search for Assignment"
            />
          </div>
        </div>
        <div className="col-3"></div>
        <div className="col-5 text-end">
          <FacultyOnlyComponent>
            <button className="btn btn-light border-dark me-2">
              Group
            </button>
            <button
              className="btn btn-danger me-2"
              onClick={() => navigate(`/Kanbas/Courses/${courseId}/Assignments/new`)}
            >
              <i className="fas fa-plus"></i> Assignment
            </button>
          </FacultyOnlyComponent>
        </div>
      </div>

      <div className="bg-secondary p-3">
        <h3 id="wd-assignments-title" className="d-flex justify-content-between align-items-center mb-0">
          <span>
            <IoEllipsisVertical className="me-2" /> ASSIGNMENTS
          </span>
          <div className="d-flex align-items-center">
            <span className="me-3">40% of Total</span>
            <FacultyOnlyComponent>
              <div className="dropdown d-inline">
                <button
                  className="btn btn-secondary"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <BsThreeDotsVertical />
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Edit</a></li>
                  <li><a className="dropdown-item" href="#">Speed Grader</a></li>
                </ul>
              </div>
            </FacultyOnlyComponent>
          </div>
        </h3>
      </div>

      <ul id="wd-assignment-list" className="list-group rounded-0">
        {assignments.map((assignment: Assignment) => (
          <li key={assignment._id} className="list-group-item d-flex align-items-center">
            <IoEllipsisVertical className="me-2" />
            <MdOutlineAssignment className="text-success me-2" />
            <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} className="flex-grow-1" style={{ textDecoration: 'none', color: 'inherit' }}>
              {assignment.title}
            </Link>
            <span className="text-danger mx-2">Multiple Modules</span> |
            <span className="ms-2"><b>Due:</b> {assignment.dueDate || 'No due date'}</span> &nbsp;|
            <span className="ms-2">{assignment.points || 100} pts&nbsp;</span>
            <FacultyOnlyComponent>
              <AssignmentControlButtons
                deleteAssignment={() =>
                  dispatch(deleteAssignment(assignment._id))
                }
              />

            </FacultyOnlyComponent>
          </li>
        ))}
      </ul>
    </div>
  );
}