import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
export default function FacultyOnlyComponent({ children }: { children: any }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  if (currentUser && currentUser.role === "FACULTY") {
    return children;
  } else {
    return null;
  }
}
