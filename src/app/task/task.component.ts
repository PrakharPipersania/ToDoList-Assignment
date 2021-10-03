import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() mytask:Task = {
    taskid : 1,
    taskName: "A default item",
    taskStatus: false
  };

  @Output() taskCompleteEvent = new EventEmitter();

  ngOnInit(): void {
  }

  triggerEvent(task:Task) {
    this.taskCompleteEvent.emit(task);
  }
  
}
