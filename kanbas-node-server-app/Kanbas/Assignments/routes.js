import * as dao from "./dao.js";
import Database from "../Database/index.js";

function AssignmentRoutes(app) {

  app.get("/api/courses/:courseId/assignments", async (req, res) => {
    const { courseId } = req.params;

    const assignments = Database.assignments.filter(
      (assignment) => assignment.course === courseId
    );
    res.json(assignments);
  });

  app.post("/api/courses/:courseId/assignments", async (req, res) => {
    const { courseId } = req.params;
    const newAssignment = {
      ...req.body,
      _id: Date.now().toString(),
      course: courseId,
    };
    Database.assignments.push(newAssignment);
    res.status(201).json(newAssignment);
  });

  app.put("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    const updatedData = req.body;

    const assignmentIndex = Database.assignments.findIndex(
      (assignment) => assignment._id === assignmentId
    );
    Database.assignments[assignmentIndex] = {
      ...Database.assignments[assignmentIndex],
      ...updatedData,
    };
    res.json(Database.assignments[assignmentIndex]);
  });

  app.delete("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    const assignmentIndex = Database.assignments.findIndex(
      (assignment) => assignment._id === assignmentId
    );
    const deletedAssignment = Database.assignments.splice(assignmentIndex, 1);
    res.json(deletedAssignment);
  });

  app.get("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    const assignment = Database.assignments.find(
      (assignment) => assignment._id === assignmentId
    );
    res.json(assignment);
  });
}

export default AssignmentRoutes;