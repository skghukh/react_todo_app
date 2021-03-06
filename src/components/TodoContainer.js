import React from "react"
import TodoList from "./TodoList";
import Header from "./Header";
import InputTodo from "./InputTodo";



class TodoContainer extends React.Component {
    state = {
        todos: [
            {
                id: 1,
                title: "Setup development environment",
                completed: true
            },
            {
                id: 2,
                title: "Develop website and add content",
                completed: false
            },
            {
                id: 3,
                title: "Deploy to live server",
                completed: false
            }
        ]
    };


    handleChange = id => {
        this.setState(prevState => ({
            todos: prevState.todos.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            }),
        }));
    };

    handleDel = id => {
        //console.log("Request to delete "+id)
        this.setState({
           todos: [
               ...this.state.todos.filter(todo=> {
                   return todo.id !== id;
               })
           ]
        });
    };

    onAddTodoItem = title =>{
        const newTodo = {
            id:4,
            title : title,
            completed : false
        };
        this.setState({
            todos : [...this.state.todos, newTodo]
        });
    };

    render() {
        return (
            <div className="container">
                {/*{this.state.todos.map(todoItem => (*/}
                {/*    <li>{todoItem.title}</li>*/}
                {/*))}*/}
                <Header/>
                <InputTodo onAddTodoItem={this.onAddTodoItem}/>
                <TodoList key="list" todos={this.state.todos} handleChangeProps={this.handleChange} delTodoProps={this.handleDel}/>
            </div>
        );
    }
}

export default TodoContainer

