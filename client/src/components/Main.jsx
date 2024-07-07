import Spinner from "./Spinner";
import ToDoItem from "./ToDoItem";

export default function Main() {
    return (
        <main class="main">
            <section class="todo-list-container">
                <h1>Todo List</h1>

                <div class="add-btn-container">
                    <button class="btn">+ Add new Todo</button>
                </div>

                <div className="table-wrapper">
                    {/* Spinner place */}
                    {/* <Spinner /> */}

                    <table className="table">
                        <thead>
                            <tr>
                                <th className="table-header-task">Task</th>
                                <th className="table-header-status">Status</th>
                                <th className="table-header-action">Action</th>
                            </tr>
                        </thead>

                        <tbody>

                            <ToDoItem />

                        </tbody>

                    </table>

                </div>

            </section>
            
        </main>
    );
};