import { Component } from '@angular/core';

@Component({
    selector: 'todos',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })

export class TODOComponent {
    
    todos = [];

 addTodo(newTodovalue) {
     let newTodo = {
        value: newTodovalue,
        text: newTodovalue
     };
     this.todos.push(newTodo);
 }

 addTodoTwo(newTodoTwovalue) {
    let newTodoTwo = {
       value: newTodoTwovalue,
    };
    this.todos.push(newTodoTwo);
}

deleteTodo(value: number) {
    this.todos.splice(value, 1);
 }

 } 