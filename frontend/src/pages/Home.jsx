import { useEffect, useState } from "react";
import { TodoList } from "../components/Todo.list";
import { TodoForm } from "../components/TodoForm";
import { getTodos } from "../api/todo.api";

const Home = () =>{
     const [todos, setTodos] = useState([]);

     useEffect(()=>{
        getTodos().then((res)=> setTodos(res.data));
        console.log(todos)
     },[])

    const updateTodo = (updatedTodo) => {
  setTodos((prev) =>
    prev.map((t) => (t._id === updatedTodo._id ? updatedTodo : t))
  );
};

const deleteTodo = (id) => {
  setTodos((prev) => prev.filter((t) => t._id !== id));
};

const addTodo = (newTodo) => {
  setTodos((prev) => [...prev, newTodo]);
};

    return(
        <div className="space-y-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">My Todo List</h1>
          <p className="text-gray-600 mt-2">Organize your tasks efficiently</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Add New Task</h2>
          <TodoForm onAdd={addTodo}/>
        </div>
        <TodoList todos={todos} onDelete={deleteTodo} onEdit={updateTodo}/>
        </div>
    )
}

export default Home;