import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FaTrash } from "react-icons/fa6";
import AssignmentDeleteForm from "./AssignmentDeleteForm";
import { useSelector } from "react-redux";

export default function AssignmentControlButtons({
  deleteAssignment,
}: {
  deleteAssignment: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div className="float-end">
      {currentUser.role === "FACULTY" && (
        <FaTrash
          className="text-danger me-2 mb-1"
          data-bs-toggle="modal"
          data-bs-target="#wd-delete-assignment-dialog"
        />
      )}
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
      <AssignmentDeleteForm deleteAssignment={deleteAssignment} />
    </div>
  );
}