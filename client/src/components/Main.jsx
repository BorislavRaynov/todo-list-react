export default function Main() {
    return (
        <main class="main">
            <section class="todo-list-container">
                <h1>Todo List</h1>

                <div class="add-btn-container">
                    <button class="btn">+ Add new Todo</button>
                </div>

                <div className="table-wrapper">
                    <div className="loading-container">
                        <div className="loading-spinner">
                            <span className="loading-spinner-text">Loading</span>
                        </div>
                    </div>

                    <table className="table">
                        <thead>
                            <tr>
                                <th className="table-header-task">Task</th>
                                <th className="table-header-status">Status</th>
                                <th className="table-header-action">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="todo is-completed">
                                <td>Give dog a bath</td>
                                <td>Complete</td>
                                <td className="todo-action">
                                    <button className="btn todo-btn">Change status</button>
                                </td>
                            </tr>

                            <tr className="todo is-completed">
                                <td>Do laundry</td>
                                <td>Complete</td>
                                <td className="todo-action">
                                    <button className="btn todo-btn">Change status</button>
                                </td>
                            </tr>
                            
                            <tr className="todo">
                                <td>Vacuum floor</td>
                                <td>Incomplete</td>
                                <td className="todo-action">
                                    <button className="btn todo-btn">Change status</button>
                                </td>
                            </tr>

                            <tr className="todo is-completed">
                                <td>Feed cat</td>
                                <td>Complete</td>
                                <td className="todo-action">
                                    <button className="btn todo-btn">Change status</button>
                                </td>
                            </tr>
                            
                            <tr className="todo">
                                <td>Change light bulbs</td>
                                <td>Incomplete</td>
                                <td className="todo-action">
                                    <button className="btn todo-btn">Change status</button>
                                </td>
                            </tr>
                            
                            <tr className="todo is-completed">
                                <td>Feed cat</td>
                                <td>Complete</td>
                                <td className="todo-action">
                                    <button className="btn todo-btn">Change status</button>
                                </td>
                            </tr>
                            
                            <tr className="todo">
                                <td>Change light bulbs</td>
                                <td>Incomplete</td>
                                <td className="todo-action">
                                    <button className="btn todo-btn">Change status</button>
                                </td>
                            </tr>
                            
                            <tr className="todo is-completed">
                                <td>Go to Store</td>
                                <td>Completed</td>
                                <td className="todo-action">
                                    <button className="btn todo-btn">Change status</button>
                                </td>
                            </tr>
                            
                            <tr className="todo">
                                <td>Fill gas tank</td>
                                <td>Incomplete</td>
                                <td className="todo-action">
                                    <button className="btn todo-btn">Change status</button>
                                </td>
                            </tr>
                        </tbody>

                    </table>

                </div>

            </section>
            
        </main>
    );
};