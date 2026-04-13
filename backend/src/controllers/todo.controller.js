import Todo from "../schema/todo.model.js";

//create
export const createTodo = async (req, res) => {
    const todo = await Todo.create(req.body);
    res.status(200).json(todo);
}

export const getAll = async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
}

export const updateTodo = async (req, res) => {
    const todo = await Todo.findByIdAndUpdate(
        req.params.id,
        req.body,
        {returnDocument: 'after'}
    );
    res.json(todo);
}

export const deleteTodo = async (req,res) =>{
    await Todo.findByIdAndDelete(req.params.id);
    res.json({message: "Todo deleted"})
}