import { Navigate, useParams } from "react-router";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addAssignment, updateAssignment } from "./reducer";
import { Assignment } from "./client";
import * as client from "./client";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignments = useSelector((state: any) => state.assignmentsReducer);

  const dispatch = useDispatch();

  const currentAssignment = assignments.assignments.find(
    (assignment: any) => assignment._id === aid
  );

  const [assignment, setAssignment] = useState<Omit<Assignment, '_id'>>({
    title: "",
    course: cid || "",
    description: "",
    points: 100,
    available: "",
    due: "",
    availableUntil: "",
  });
  const [formAssignment, setFormAssignment] = useState(assignment);

  const getAssignment = async () => {
    if (!aid || aid === "new") {
      return;
    }

    const response = await client.findAssignmentById(aid);
    setAssignment({
      title: response.title || "",
      description: response.description || "",
      points: response.points || 100,
      due: response.dueDate || "",
      available: response.availableFrom || "",
      availableUntil: response.availableUntil || "",
      course: response.course || cid || "",
    });
    <Navigate to={`/Kanbas/Courses/${cid}/Assignments`} />
  }

  const submitAssignment = async () => {
    if (aid === "new") {
      const response = await client.createAssignment(cid!, assignment);
      dispatch(addAssignment(response));
    } else if (aid) {
      const response = await client.updateAssignment(aid, assignment as Assignment);
      dispatch(updateAssignment(response));
    }
    <Navigate to={`/Kanbas/Courses/${cid}/Assignments`} />
  };

  useEffect(() => {
    getAssignment();
  }, [aid]);

  return (
    <div className="container mt-3">
      <h2>{aid ? "Edit Assignment" : "Add Assignment"}</h2>
      <div className="mb-3">
        <label className="form-label">Assignment Name</label>
        <input
          type="text"
          className="form-control"
          value={assignment.title}
          onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea
          className="form-control"
          value={assignment.description}
          onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Points</label>
        <input
          type="number"
          className="form-control"
          value={assignment.points}
          onChange={(e) => setAssignment({ ...assignment, points: parseInt(e.target.value) })}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Due</label>
        <input
          type="date"
          className="form-control"
          value={assignment.due}
          onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Available</label>
        <input
          type="date"
          className="form-control"
          value={assignment.available}
          onChange={(e) => setAssignment({ ...assignment, available: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Until</label>
        <input
          type="date"
          className="form-control"
          value={assignment.availableUntil}
          onChange={(e) => setAssignment({ ...assignment, availableUntil: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <button className="btn btn-primary me-2" onClick={submitAssignment}>
          {aid ? "Update" : "Add"} Assignment
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => <Navigate to={`/Kanbas/Courses/${cid}/Assignments`} />}>
          Cancel
        </button>
      </div>
    </div>
  );
}