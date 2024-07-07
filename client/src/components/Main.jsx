import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import ToDoItem from "./ToDoItem";

export default function Main() {
    const [todos, setTodos] = useState([])
    const [pending, setPending] = useState(true)

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/todos')
            .then(res => res.json())
            .then(result => {
                const data = Object.values(result)
                setTodos(data)
                setPending(false)
            })
    }, []);

    const todoItemChangeHandler = (todoID) => {
        setTodos(prevTodos => prevTodos.map(todo => 
            todo._id === todoID 
                ? {...todo, isCompleted: !todo.isCompleted}
                : todo
        ))
    };

    return (
        <main className="main">
            <section className="todo-list-container">
                <h1>Todo List</h1>

                <div className="add-btn-container">
                    <button className="btn">+ Add new Todo</button>
                </div>

                <div className="table-wrapper">
                    {pending && <Spinner />}

                    <table className="table">
                        <thead>
                            <tr>
                                <th className="table-header-task">Task</th>
                                <th className="table-header-status">Status</th>
                                <th className="table-header-action">Action</th>
                            </tr>
                        </thead>

                        <tbody>

                            {todos.map(todo =>
                                <ToDoItem 
                                    key={todo._id}
                                    id={todo._id}
                                    text={todo.text}
                                    isCompleted={todo.isCompleted}
                                    onStatusChange={todoItemChangeHandler}
                                />
                            )}

                        </tbody>

                    </table>

                </div>

            </section>
            
        </main>
    );
};