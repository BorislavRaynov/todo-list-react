export default function ToDoItem(props) {
    const classes = ['todo']

    props.isCompleted && classes.push('is-completed');

    return (
        <tr className={classes.join(' ')}>
            <td>{props.text}</td>
            <td>Completed</td>
            <td className="todo-action">
                <button className="btn todo-btn" onClick={() => props.onStatusChange(props.id)}>Change status</button>
            </td>
        </tr>
    );
}; 