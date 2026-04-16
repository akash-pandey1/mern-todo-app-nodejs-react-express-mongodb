import { useDispatch } from "react-redux";
import { updateTodoAsync, deleteTodoAsync } from "../redux/slices/todoSlice";

export const useTodoActions = () => {
  const dispatch = useDispatch();

  const handleEdit = async (id, newTitle) => {
    if (!newTitle.trim()) return;
    
    await dispatch(
      updateTodoAsync({
        _id: id,
        title: newTitle,
      })
    );
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      dispatch(deleteTodoAsync(id));
    }
  };

  return { handleEdit, handleDelete };
};
