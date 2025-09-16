import { Component, signal } from '@angular/core';
import { TodoComponent } from './components/todo/todo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoComponent],      
  template: `<app-todo></app-todo>`,
  styleUrls: ['./app.scss']       
})
export class App {
  protected readonly title = signal('todo-list');
}
