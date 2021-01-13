import React from "react"
const completedStyle = {
    fontStyle: "italic",
    color: "#d35e0f",
    opacity: 0.4,
    textDecoration: "line-through",
}
class TodoItem extends React.Component {
    render() {
        const { completed, id, title } = this.props.todo;
        return (
            <div>
                <ul className="todo-item">
                    <div>
                        <button  onClick={()=>this.props.delTodoProps(id)}> Delete </button>
                        <input  type="checkbox" checked={completed}  onChange={()=>this.props.handleChangeProps(id)} /> <span style={this.props.todo.completed ? completedStyle : null}>{title}</span>
                    </div>
                </ul>
            </div>
        )
    }
}

export default TodoItem