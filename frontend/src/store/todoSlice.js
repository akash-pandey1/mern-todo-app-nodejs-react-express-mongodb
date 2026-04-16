import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTodos, createTodo, updateTodo as updateTodoAPI, deleteTodo as deleteTodoAPI } from "../api/todo.api";

// Async thunks
export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getTodos();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const addNewTodo = createAsyncThunk(
  "todos/addNewTodo",
  async (todoData, { rejectWithValue }) => {
    try {
      const response = await createTodo(todoData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const updateTodoAsync = createAsyncThunk(
  "todos/updateTodo",
  async (todoData, { rejectWithValue }) => {
    try {
      const response = await updateTodoAPI(todoData._id, todoData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const deleteTodoAsync = createAsyncThunk(
  "todos/deleteTodo",
  async (id, { rejectWithValue }) => {
    try {
      await deleteTodoAPI(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Fetch todos
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Add todo
    builder
      .addCase(addNewTodo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addNewTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addNewTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Update todo
    builder
      .addCase(updateTodoAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateTodoAsync.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.items.findIndex((t) => t._id === action.payload._id);
        if (index >= 0) {
          state.items[index] = action.payload;
        }
      })
      .addCase(updateTodoAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Delete todo
    builder
      .addCase(deleteTodoAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTodoAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter((t) => t._id !== action.payload);
      })
      .addCase(deleteTodoAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError } = todoSlice.actions;
export default todoSlice.reducer;
