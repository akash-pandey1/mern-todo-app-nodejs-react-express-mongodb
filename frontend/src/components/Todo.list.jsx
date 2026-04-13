
import { TodoItem } from "./TodoItem"

export const TodoList =( {todos, onDelete, onEdit} )=>{
    console.log(todos)
    if (!todos.length) return (
        <div className="text-center py-8 text-gray-500">
            <p className="text-lg">📝 No tasks yet. Add one to get started!</p>
        </div>
    );
    return (
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Your Tasks ({todos.length})</h2>
          <ul className="space-y-3">
            {todos.map((item) =>(
            <TodoItem key={item._id} todo={item}  onEdit={onEdit} onDelete={onDelete} />
            ))}
          </ul>
        </div>
    )
}