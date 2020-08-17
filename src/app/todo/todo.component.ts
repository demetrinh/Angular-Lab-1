import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [
    {
      task: 'eat healthy',
      completed: false,
    },
    {
      task: 'exercise',
      completed: false,
    },
    {
      task: 'get married',
      completed: true,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
