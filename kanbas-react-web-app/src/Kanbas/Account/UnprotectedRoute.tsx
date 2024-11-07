import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
export default function UnprotectedRoute({ children }: { children: any }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  if (currentUser) {
    return null;
  } else {
    return children;
  }
}