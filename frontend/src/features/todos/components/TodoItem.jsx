import { useState } from "react";
import { useTodoActions } from "../hooks/useTodoActions";

export const TodoItem = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.title);
  const { handleEdit, handleDelete } = useTodoActions();

  const handleSave = () => {
    handleEdit(todo._id, editText);
    setIsEditing(false);
    setEditText(todo.title);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditText(todo.title);
  };

  return (
    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="flex-1 border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoFocus
          />
          <button
            onClick={handleSave}
            className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm font-semibold"
          >
            Save
          </button>
          <button
            onClick={handleCancel}
            className="bg-gray-400 hover:bg-gray-500 text-white px-3 py-1 rounded text-sm font-semibold"
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <span className="flex-1 text-gray-800 font-medium">{todo.title}</span>
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm font-semibold"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(todo._id)}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm font-semibold"
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
};
