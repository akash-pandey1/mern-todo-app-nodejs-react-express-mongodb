# Redux Todo Feature - Project Structure

## Folder Organization

```
src/
├── features/
│   └── todos/                              # Todo feature module
│       ├── redux/                          # Redux state management
│       │   ├── store.js                    # Redux store config
│       │   └── slices/
│       │       └── todoSlice.js            # Redux slice with async thunks
│       │
│       ├── components/                     # React components
│       │   ├── TodoReduxContainer.jsx      # Main container (orchestrator)
│       │   ├── TodoHeader.jsx              # Header section
│       │   ├── ErrorAlert.jsx              # Error notification
│       │   ├── AddTodoButton.jsx           # Add button
│       │   ├── TodoList.jsx                # List wrapper (presentational)
│       │   ├── TodoItem.jsx                # Individual todo item
│       │   ├── modals/
│       │   │   └── AddTodoModal.jsx        # Popup modal for adding todos
│       │   └── index.js                    # Barrel exports
│       │
│       ├── hooks/                          # Custom React hooks
│       │   ├── useTodoActions.js           # Todo action handlers
│       │   └── index.js                    # Barrel exports
│       │
│       └── index.js                        # Feature barrel export
│
├── pages/
│   └── Home.jsx                            # Original todo page (untouched)
│
├── components/                             # Shared components
│   ├── TodoForm.jsx                        # Original form (untouched)
│   ├── Todo.list.jsx                       # Original list (untouched)
│   └── TodoItem.jsx                        # Original item (untouched)
│
├── api/
│   └── todo.api.js                         # API calls
│
├── store/                                  # Legacy store (can be removed)
│   ├── store.js
│   └── todoSlice.js
│
└── App.jsx                                 # Main app with view switcher
```

## Component Breakdown

### 1. **TodoReduxContainer** (Orchestrator)
- Main component that coordinates everything
- Handles state fetching on mount
- Manages modal state
- Imports all sub-components

### 2. **TodoHeader**
- Displays the page title and description
- Pure presentational component

### 3. **ErrorAlert**
- Displays error messages
- Provides close button to clear errors
- Pure presentational component

### 4. **AddTodoButton**
- Simple button to trigger modal
- Receives onClick handler via props

### 5. **TodoList** (Wrapper)
- Loading state UI
- Empty state UI
- Maps todos to TodoItem components
- Presentational component

### 6. **TodoItem** (Individual Item)
- Display mode: shows todo with Edit/Delete buttons
- Edit mode: inline editing with Save/Cancel
- Uses `useTodoActions` hook for logic
- Self-contained state management

### 7. **AddTodoModal** (Popup)
- Form input for new todos
- Submit/Cancel buttons
- Loading states
- Dispatches Redux action on submit

## Custom Hooks

### `useTodoActions`
- Encapsulates todo action logic
- Returns `handleEdit()` and `handleDelete()`
- Used by TodoItem component
- Decouples business logic from UI

## Redux State Management

### Store Structure
```javascript
{
  todos: {
    items: [],      // Array of todo objects
    loading: false, // Loading state
    error: null     // Error message
  }
}
```

### Async Thunks
- `fetchTodos` - Fetch all todos
- `addNewTodo` - Add new todo
- `updateTodoAsync` - Update existing todo
- `deleteTodoAsync` - Delete a todo

## Import Patterns

### Clean Imports
```javascript
// From features/todos barrel export
import { TodoReduxContainer, useTodoActions, store } from './features/todos'

// From individual components
import { TodoList, TodoItem } from './features/todos/components'
```

## Benefits of This Structure

✅ **Separation of Concerns** - Each component has single responsibility
✅ **Reusability** - Components can be reused independently
✅ **Maintainability** - Easy to find and modify specific parts
✅ **Testability** - Small components are easier to test
✅ **Scalability** - Easy to add new features
✅ **Clean Imports** - Barrel exports reduce import complexity
✅ **State Management** - Redux handles all state globally
✅ **Hook Encapsulation** - Business logic in custom hooks

## How It Works

1. **App.jsx** - Wraps app with Redux Provider, toggles views
2. **TodoReduxContainer** - Fetches todos on mount, manages modal state
3. **TodoList & TodoItem** - Display todos
4. **AddTodoModal** - Popup for adding todos
5. **useTodoActions** - Handles edit/delete operations
6. **Redux Store** - Manages global state
