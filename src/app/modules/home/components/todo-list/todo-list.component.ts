import { Component } from '@angular/core';

// Interface
import { TaskList } from './../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {


  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]')

  constructor () {}

  ngDoCheck(): void {
    this.setLocalStorage()
  }

  public deleteItemTaskList (event: number){
    this.taskList.splice(event, 1)
  }

  public deleteAllTasks() {
    const confirm = window.confirm("Deseja realmente deletar tudo?")
    if (confirm) {
      this.taskList = []
    }
  }

  public setEmitTaskList(event: string) {
    this.taskList.push({ task: event, checked:false })
  }

  public verificaItemVazio(event: string, index: number){
    if (!event.length) {
      const confirm = window.confirm("Task vazia, deseja deletar?")
      if (confirm) {
        this.deleteItemTaskList(index);
      }
    }
  }
   public setLocalStorage(){
    if (this.taskList) {
      this.taskList.sort( (first, last) => Number(first.checked) - Number(last.checked))
      localStorage.setItem("list", JSON.stringify(this.taskList))
    }
   }
}
