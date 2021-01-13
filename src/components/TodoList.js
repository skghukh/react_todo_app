import React from "react"
import TodoItem from "./TodoItem"


function TodoList(props) {
    return (
        <div>
            {props.todos.map(todo =>
                (
                    <TodoItem key={todo.id} todo={todo} handleChangeProps={props.handleChangeProps}
                              delTodoProps={props.delTodoProps}/>
                ))}
        </div>
    );
}

//handleChangeProps={this.props.handleChangeProps}
export default TodoList