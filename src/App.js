import React, { Component } from 'react';
 import './App.css';
 import ToDo from './components/ToDo.js';

 class App extends Component {
   constructor(props) {
     super(props);
     this.state = {
       todos: [
         { description: 'Walk the cat', isCompleted: false },
         { description: 'Throw the dishes away', isCompleted: true },
         { description: 'Buy new dishes', isCompleted: false }
       ],
       newToDoDescription: '',
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

   deleteToDo(index){
     var modifiableToDos = this.state.todos.slice();
     var deletedToDos = modifiableToDos.splice(index, 1);
     this.setState({todos: deletedToDos});
   }

   render() {
     return (
       <div className="App">
        <ul>
          { this.state.todos.map( (todo, index) =>
            <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } toggleComplete={ () => this.toggleComplete(index)} onClick={ (index) => this.deleteToDo(index) } />
          )}
        </ul>
        <form onSubmit={ (e) => this.handleSubmit(e) }>
           <input type="text" value={ this.state.newTodoDescription } onChange={ (e) => this.handleChange(e)}/>
           <input type="submit" />
         </form>
       </div>
     );
   }
 }

 export default App;
