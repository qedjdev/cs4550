import { BsArrowDown, BsArrowDownSquareFill, BsGripVertical, BsPlus } from "react-icons/bs";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import { BiArrowToBottom, BiChevronDown, BiSolidNotepad } from "react-icons/bi";
import { VscNotebook, VscTriangleDown } from "react-icons/vsc";
import { IoEllipsisVertical } from "react-icons/io5";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <div className="d-flex justify-content-between align-items-center flex-wrap p-2">
        <div className="w-60 d-flex">
          <FaMagnifyingGlass className="fs-5 text-secondary position-absolute mt-2 ms-3"/>
          <input id="wd-search-assignment" className="form-control ps-5"
            placeholder="Search..." />
        </div>
        <div>
          <button id="wd-add-assignment-group" className="btn rounded-1 btn-m me-1 btn-danger">+ Group</button>
          <button id="wd-add-assignment" className="btn btn-m rounded-1 me-1 btn-secondary">+ Assignment</button>
        </div>
      </div>

      <ul id="wd-assignment-list" className="p-2 lh-sm">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <div className="d-flex fw-bold text-dark fs-4 justify-content-between">
              <div>
                <BsGripVertical className="me-2 fs-3" />
                <VscTriangleDown className="fs-6" />
                &nbsp;ASSIGNMENTS
              </div>
              <div>
                <span className="badge bg-transparent border rounded-5 border-dark p-2 text-dark">
                  40% of Total
                </span>
                <BsPlus className="fs-2" />
                <IoEllipsisVertical className="fs-4" />
              </div>
            </div>
          </div>
          <ul className="list-group rounded-0">
            <li className="wd-assignment-list-item list-group-item p-1 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-0 fs-3" />
              <VscNotebook className="me-2 fs-2 text-success" />
              <div className="col p-1 me-1">
                <a className="wd-assignment-link fs-4 fw-bold text-dark text-decoration-none"
                  href="#/Kanbas/Courses/1234/Assignments/123">
                  A1
                </a>
                <br />
                <span className="fs-6">
                  <span className="text-danger">Multiple Modules</span>
                  &nbsp;| <b>Not available until</b> May 6 at 12:00am
                  <br />
                  <b>Due</b> May 13 at 11:59 | 100 pts
                </span>
              </div>
              <div className="d-flex"><LessonControlButtons /></div>
            </li>
            <li className="wd-assignment-list-item list-group-item p-1 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-0 fs-3" />
              <VscNotebook className="me-2 fs-2 text-success" />
              <div className="col p-1 me-1">
                <a className="wd-assignment-link fs-4 fw-bold text-dark text-decoration-none"
                  href="#/Kanbas/Courses/1234/Assignments/123">
                  A2
                </a>
                <br />
                <span className="fs-6">
                  <span className="text-danger">Multiple Modules</span>
                  &nbsp;| <b>Not available until</b> May 13 at 12:00am
                  <br />
                  <b>Due</b> May 20 at 11:59 | 100 pts
                </span>
              </div>
              <div className="d-flex"><LessonControlButtons /></div>
            </li>
            <li className="wd-assignment-list-item list-group-item p-1 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-0 fs-3" />
              <VscNotebook className="me-2 fs-2 text-success" />
              <div className="col p-1 me-1">
                <a className="wd-assignment-link fs-4 fw-bold text-dark text-decoration-none"
                  href="#/Kanbas/Courses/1234/Assignments/123">
                  A3
                </a>
                <br />
                <span className="fs-6">
                  <span className="text-danger">Multiple Modules</span>
                  &nbsp;| <b>Not available until</b> May 20 at 12:00am
                  <br />
                  <b>Due</b> May 27 at 11:59 | 100 pts
                </span>
              </div>
              <div className="d-flex"><LessonControlButtons /></div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
