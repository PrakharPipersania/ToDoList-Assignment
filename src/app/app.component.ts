import { Component } from '@angular/core';
import { Task } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  genID:number = 3;
  textValue:string = "";
  title = 'ToDoList';

  tasks:Array<Task> = [
    {
      taskid: 1,
      taskName: "A default item",
      taskStatus: false
    },
    {
      taskid: 2,
      taskName: "A completed default item",
      taskStatus: true
    }
  ];
  
  setTaskStatus(item:Task){
    // console.log(item);
    let index = this.tasks.findIndex(e => e.taskid == item.taskid );
    let currStatus = this.tasks[index].taskStatus;
    this.tasks[index].taskStatus=!currStatus;
    // console.log(item);
  }

  addDatatoTask() {
    this.tasks.push({ 
      taskid: this.genID,
      taskName: this.textValue, 
      taskStatus: false
    });
    this.textValue = "";
    ++this.genID;
  }

  clearTask() {
    this.tasks=this.tasks.filter(obj => !obj.taskStatus);
    console.log(this.tasks);
  }

}