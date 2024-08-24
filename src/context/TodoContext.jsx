import React, { createContext, useState } from 'react';
export const TodoContext = createContext();


export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([
        { id: 1, title: "Buy groceries", description: "Purchase milk, eggs, bread, and fruits.", isCompleted: false },
        { id: 2, title: "Morning workout", description: "Complete a 30-minute run and 15 minutes of strength training.", isCompleted: true },
    ]);

    const addTodo = (title, description) => {
        setTodos([
            ...todos,
            { id: Date.now(), title, description, isCompleted: false }
        ]);
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        ));
    };

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <TodoContext.Provider value={{ todos, addTodo, toggleTodo, removeTodo }}>
            {children}
        </TodoContext.Provider>
    );
};
