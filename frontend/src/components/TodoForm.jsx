import { useState } from "react";
import { createTodo } from "../api/todo.api";

export const TodoForm =({onAdd})=>{

    const [text, setText] = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();
        if(!text.trim()) return

        const body= {title:text}
        
       const res =  await createTodo(body);
       setText('');
       onAdd(res.data);
       console.log(res.data);

    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
         <div>
           <label htmlFor="name" className="block mb-2 font-semibold text-gray-700">Task Title</label>
           <input type="text" id="name" name="name" placeholder="Enter a new task..."
            className="border border-gray-300 shadow p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e)=> setText(e.target.value)}
            value={text}
            />
         </div>

         <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition duration-200">Add Task</button>
       </form>
    )
}