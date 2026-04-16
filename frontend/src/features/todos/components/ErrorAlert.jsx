import { useDispatch } from "react-redux";
import { clearError } from "../redux/slices/todoSlice";

export const ErrorAlert = ({ error }) => {
  const dispatch = useDispatch();

  if (!error) return null;

  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
      <span className="block sm:inline">{error}</span>
      <button
        onClick={() => dispatch(clearError())}
        className="ml-2 font-bold text-red-700 hover:text-red-800"
      >
        ×
      </button>
    </div>
  );
};
