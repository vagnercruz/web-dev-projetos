import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private tasks: Task[] = [];
  private nextId = 1;

  getTask(): Task[] {
    return this.tasks;
  }

  addTask(title: string): void {
    this.tasks.push({ id: this.nextId++, title, completed: false});
  }

  toggleTask(id: number): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) task.completed = !task.completed;
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }
}