import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

const API_BASE = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${API_BASE}/api/courses`;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

export interface Assignment {
  _id: string;
  title: string;
  description: string;
  points: number;
  due: string;
  available: string;
  availableUntil: string | undefined;
  course: string;
}

export const createAssignment = async (courseId: string, assignment: Omit<Assignment, '_id'>) => {
  return (await axios.post(`${COURSES_API}/${courseId}/assignments`, assignment)).data;
};

export const findAssignmentById = async (assignmentId: string) => {
  return (await axios.get(`${ASSIGNMENTS_API}/${assignmentId}`)).data;
};

export const findAssignmentsForCourse = async (courseId: string) => {
  return (await axios.get(`${COURSES_API}/${courseId}/assignments`)).data;
};

export const updateAssignment = async (assignmentId: string, assignment: Assignment) => {
  return (await axios.put(`${ASSIGNMENTS_API}/${assignmentId}`, assignment)).data;
};

export const deleteAssignment = async (assignmentId: string) => {
  return (await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`)).data;
};