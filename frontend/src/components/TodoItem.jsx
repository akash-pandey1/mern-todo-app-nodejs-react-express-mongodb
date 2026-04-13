import { deleteTodo, updateTodo } from "../api/todo.api";

export const TodoItem =({todo, onEdit, onDelete})=>{

    const toggleTodo =async  () =>{
        const res = await updateTodo(todo._id,{
            completed: !todo.completed
        });
        onEdit(res.data);
    }

    const deleteTodoItem =async  () =>{
        await deleteTodo(todo._id);
        onDelete(todo._id);
    }

    return (
        <li className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition duration-200">
            <div className="px-6 py-4 flex items-center justify-between">
                <div className="flex-1 min-w-0">
                    <h3 className={todo.completed ? "text-lg font-medium truncate line-through text-gray-400" : "text-lg font-medium truncate text-gray-900"}>
                        {todo?.title}
                    </h3>
                </div>
                <div className="flex items-center gap-3 ml-4">
                    <button 
                        onClick={toggleTodo}
                        className="text-2xl hover:scale-110 transition duration-200"
                        title={todo.completed ? "Mark incomplete" : "Mark complete"}
                    >
                        {todo.completed ? "✅" : "⭕"}
                    </button>
                    <button 
                        onClick={deleteTodoItem}
                        className="text-2xl hover:scale-110 transition duration-200"
                        title="Delete task"
                    >
                        ❌
                    </button>
                </div>
            </div>
        </li>
    )
}