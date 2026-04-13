import express from 'express';
import { createTodo, deleteTodo, getAll, updateTodo } from '../controllers/todo.controller.js';

const router = express.Router()

router.post('/',createTodo);
router.get('/',getAll);
router.put('/:id',updateTodo);
router.delete('/:id',deleteTodo);


export default router;