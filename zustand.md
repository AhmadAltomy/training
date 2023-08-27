# Zustand Typescript

## Zustand

Zustand is a small, fast and scalable library for managing React state.

## Installation

```bash
npm install zustand
```

## Usage

```tsx title="src/App.tsx"
import create from 'zustand'

type State = {
  count: number
  inc: () => void
  dec: () => void
}

const useStore = create<State>((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
}))

function Counter() {
  const { count, inc, dec } = useStore()
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </div>
  )
}
```

**Important Note**: In the previous example, the `useStore` hook is created inside the component. This is not a good practice, as it will create a new store every time the component is rendered.
And the store will be cause a re-render every time the state changes, Because we selected the whole state to be re-rendered.

To avoid this, we should create the store outside the component, and select only the state that we need to be re-rendered.

```tsx title="src/App.tsx"

import create from 'zustand'

type State = {
  count: number
  inc: () => void
  dec: () => void
}

const useStore = create<State>((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
}))

function Counter() {
  const count = useStore((state) => state.count)
  const inc = useStore((state) => state.inc)
  const dec = useStore((state) => state.dec)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </div>
  )
}
```

## API

### `create`

```ts
const useStore = create<State>((set, get) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
}))
```

Creates a store hook. The `set` function is used to update the store state, and the `get` function is used to get the store state.

### `set`

```ts
set((state) => ({ count: state.count + 1 }))
```

The `set` function is used to update the store state.

### `get`

```ts
get().count
```

The `get` function is used to get the store state.

### `subscribe`

```ts
const unsubscribe = subscribe((state) => {
  console.log(state.count)
})
```

The `subscribe` function is used to subscribe to the store state changes.

### `destroy`

```ts
destroy()
```

The `destroy` function is used to destroy the store.

## Examples

### Counter

```tsx title="src/App.tsx"
import create from 'zustand'

type State = {
  count: number
  inc: () => void
  dec: () => void
}

const useStore = create<State>((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
}))

function Counter() {
  const { count, inc, dec } = useStore()
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </div>
  )
}
```

### Todo List

```tsx title="src/App.tsx"
import create from 'zustand'

type Todo = {
  id: number
  text: string
  done: boolean
}

type State = {
  todos: Todo[]
  addTodo: (text: string) => void
  toggleTodo: (id: number) => void
  removeTodo: (id: number) => void
}

const useStore = create<State>((set) => ({
  todos: [],
  addTodo: (text) =>
    set((state) => ({
      todos: [...state.todos, { id: Date.now(), text, done: false }],
    })),
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      ),
    })),
  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
}))

function TodoList() {
  const { todos, addTodo, toggleTodo, removeTodo } = useStore()
  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button onClick={() => removeTodo(todo.id)}>x</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addTodo(`Todo ${todos.length + 1}`)}>
        Add Todo
      </button>
    </div>
  )
}
```

### Todo List (With Persist)

```tsx title="src/App.tsx"
import create from 'zustand'

type Todo = {
  id: number
  text: string
  done: boolean
}

type State = {
  todos: Todo[]
  addTodo: (text: string) => void
  toggleTodo: (id: number) => void
  removeTodo: (id: number) => void
}

const useStore = create<State>(
  (set) => ({
    todos: [],
    addTodo: (text) =>
      set((state) => ({
        todos: [...state.todos, { id: Date.now(), text, done: false }],
      })),
    toggleTodo: (id) =>
      set((state) => ({
        todos: state.todos.map((todo) =>
          todo.id === id ? { ...todo, done: !todo.done } : todo
        ),
      })),
    removeTodo: (id) =>
      set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== id),
      })),
  }),
  {
    name: 'todos',
    getStorage: () => localStorage,
  }
)

function TodoList() {
  const { todos, addTodo, toggleTodo, removeTodo } = useStore()
  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button onClick={() => removeTodo(todo.id)}>x</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addTodo(`Todo ${todos.length + 1}`)}>
        Add Todo
      </button>
    </div>
  )
}
```

### Todo List (With Persist and Immer)

```tsx title="src/App.tsx"
import create from 'zustand'

type Todo = {
  id: number
  text: string
  done: boolean
}

type State = {
  todos: Todo[]
  addTodo: (text: string) => void
  toggleTodo: (id: number) => void
  removeTodo: (id: number) => void
}

const useStore = create<State>(
  (set) => ({
    todos: [],
    addTodo: (text) =>
      set((state) => {
        state.todos.push({ id: Date.now(), text, done: false })
      }),
    toggleTodo: (id) =>
      set((state) => {
        const todo = state.todos.find((todo) => todo.id === id)
        if (todo) todo.done = !todo.done
      }),
    removeTodo: (id) =>
      set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== id),
      })),
  }),
  {
    name: 'todos',
    getStorage: () => localStorage,
    useImmer: true,
  }
)

function TodoList() {
  const { todos, addTodo, toggleTodo, removeTodo } = useStore()
  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button onClick={() => removeTodo(todo.id)}>x</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addTodo(`Todo ${todos.length + 1}`)}>
        Add Todo
      </button>
    </div>
  )
}
```

## Recipes

### Persist

- Zustand supports persisting the store state to the storage.
- Zustand supports `localStorage` and `sessionStorage` storages.
- Zustand supports custom storages.

**persist**: Means that the state will be saved to the storage, and will be loaded from the storage when the app is reloaded.

### Immer

- Zustand supports `immer` for immutable updates.
- Zustand supports custom immutable libraries.
- Zustand supports custom immutable functions.

**immutable**: Means that the state cannot be changed after it is created, and any change to the state will create a new state.
