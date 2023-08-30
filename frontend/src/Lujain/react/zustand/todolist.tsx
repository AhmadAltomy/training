import React, { useState } from 'react';
// ***************************************************
// to view thee style you should remove the css  files from App.tsx and main.tsx
// ***************************************************
import './index.css';
import { Button, Form, Input, Checkbox } from 'antd';
import { create } from 'zustand';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

type Todo = {
    id: number;
    text: string;
    done: boolean;
};

type State = {
    todos: Todo[];
    addTodo: (text: string) => void;
    toggleTodo: (id: number) => void;
    editTodo: (id: number, newText: string) => void;
    removeTodo: (id: number) => void;
};

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
    editTodo: (id, newText) =>
        set((state) => ({
            todos: state.todos.map((todo) =>
                todo.id === id ? { ...todo, text: newText } : todo
            ),
        })),
    removeTodo: (id) =>
        set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
        })),
}));

function TodoList() {
    const { todos, addTodo, toggleTodo, removeTodo, editTodo } = useStore();
    const [note, setNote] = useState('');
    const [editItemId, setEditItemId] = useState<number | null>(null);
    const [editedText, setEditedText] = useState('');

    const handleAddTodo = () => {
        if (note.trim() !== '') {
            addTodo(note);
            setNote('');
        }
    };

    const handleEdit = (id: number, text: string) => {
        setEditItemId(id);
        setEditedText(text);
    };

    const handleEditSubmit = (id: number) => {
        if (editedText.trim() !== '') {
            editTodo(id, editedText);
            setEditItemId(null);
            setEditedText('');
        }
    };

    return (
        <div className='container'>
            <h1>Todo list</h1>

            <div className="add-note">
                <Form.Item
                    name="note"
                    label="Note"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input value={note} onChange={(e) => setNote(e.target.value)} />
                </Form.Item>
                <Button onClick={handleAddTodo}>Add Todo</Button>
            </div>


            <div className="notes-list">
                {todos.map((todo) => (
                    <div key={todo.id}>
                        <Checkbox
                            checked={todo.done}
                            onChange={() => toggleTodo(todo.id)}
                        >
                            {editItemId === todo.id ? (
                                <Input
                                    value={editedText}
                                    onChange={(e) => setEditedText(e.target.value)}
                                />
                            ) : (
                                todo.text
                            )}
                        </Checkbox>
                        {editItemId === todo.id ? (
                            <Button onClick={() => handleEditSubmit(todo.id)}>Submit</Button>
                        ) : (
                            <>
                                <Button onClick={() => removeTodo(todo.id)}>
                                    <DeleteOutlined />
                                </Button>
                                <Button onClick={() => handleEdit(todo.id, todo.text)}>
                                    <EditOutlined />
                                </Button>
                            </>
                        )}
                    </div>
                ))}
            </div>

        </div>
    );
}

export default TodoList;
