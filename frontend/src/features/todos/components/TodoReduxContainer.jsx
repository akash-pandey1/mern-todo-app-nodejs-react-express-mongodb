import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../redux/slices/todoSlice";
import { TodoHeader } from "./TodoHeader";
import { ErrorAlert } from "./ErrorAlert";
import { AddTodoButton } from "./AddTodoButton";
import { TodoList } from "./TodoList";
import { AddTodoModal } from "./modals/AddTodoModal";

export const TodoReduxContainer = () => {
  const dispatch = useDispatch();
  const { items: todos, loading, error } = useSelector((state) => state.todos);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className="space-y-6">
      <TodoHeader />

      {error && <ErrorAlert error={error} />}

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-700">Your Tasks</h2>
          <AddTodoButton onClick={() => setIsModalOpen(true)} />
        </div>

        <TodoList todos={todos} loading={loading} />
      </div>

      <AddTodoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};
