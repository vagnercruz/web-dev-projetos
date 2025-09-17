import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo.html',
  styleUrls: ['./todo.scss']
})
export class TodoComponent {
  newTask = '';
  tasks: { id: number; title: string; completed: boolean }[] = [];

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({
        id: Date.now(),
        title: this.newTask,
        completed: false
      });
      this.newTask = '';
    }
  }

  toggleTask(id: number) {
    const task = this.tasks.find(t => t.id === id);
    if (task) task.completed = !task.completed;
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }
}
