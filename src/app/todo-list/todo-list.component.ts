import { Component, HostListener, OnInit } from '@angular/core';
import { TodoItem } from '../models/todo-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoItems: TodoItem[] = [];
  currentTodoItemDescription: string;
  public listContainerHeight = window.innerHeight - 130;
  public showErrorMessage = false;
  constructor() { }

  ngOnInit() {
    this.showErrorMessage = false;
  }

  @HostListener('window:resize') onResize() {
    this.listContainerHeight = window.innerHeight - 130;
  }

  addItem() {
    const itemDescriptions = this.todoItems.map((todoItem) => todoItem.itemDescription.toLowerCase());
    if (!itemDescriptions.includes(this.currentTodoItemDescription.toLowerCase())) {
      const todoItem = new TodoItem();
      todoItem.itemDescription = this.currentTodoItemDescription;
      this.todoItems.push(todoItem);
      this.showErrorMessage = false;
      return;
    }
    this.showErrorMessage = true;
  }

  removeAllTodoItems() {
    this.todoItems = [];
  }

  removeItem(index) {
    this.todoItems.splice(index, 1);
  }

}
