import React, { Component } from 'react';
 import './App.css';
 import ToDo from './components/ToDo.js';

 class App extends Component {
   constructor(props) {
     super(props);
     this.state = {
       todos: [
         { description: 'Walk the cat', isCompleted: false, Deleted: false },
         { description: 'Throw the dishes away', isCompleted: true, Deleted: false},
         { description: 'Buy new dishes', isCompleted: false, Deleted: false }
       ],
       newToDoDescription: ''
     };
   }

   handleChange(e) {
    this.setState({ newTodoDescription: e.target.value })
  }

   handleSubmit(e){
     e.preventDefault();
     if (!this.state.newTodoDescription) { return }
     const newTodo = { description: this.state.newTodoDescription, isCompleted: false };
     this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' });
   }

   toggleComplete(index){
     const todos = this.state.todos.slice();
     const todo = todos[index];
     todo.isCompleted = todo.isCompleted ? false : true;
     this.setState({ todos: todos });
   }

   deleteToDo(d){
     const deleteItems = this.state.todos.filter();
     const deleteItem = deleteItems[index];
     deleteItem.isDeleted = deleteItem.isDeleted = false;
     this.setState({todos: todos});
   }

   render() {
     return (
       <div className="App">
        <ul>
          { this.state.todos.map( (todo,index) =>
            <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } toggleComplete={ () => this.toggleComplete(index) } />
          )}
        </ul>
        <form onSubmit={ (e) => this.handleSubmit(e) }>
           <input type="text" value={ this.state.newTodoDescription } onChange={ (e) => this.handleChange(e)}/>
           <input type="submit" />
         </form>
         <form>
         <button value={ this.state.isCompleted} onChange={ (d) => this.deleteToDo(d) }>
         delete
         </button>
         </form>
       </div>
     );
   }
 }

 export default App;
