import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit {

  @Output() public emitItemTaskKist = new EventEmitter();

  public addItemTaskList: string = "";

  constructor() { }

  ngOnInit(): void {


  }

  public submitItemTaskList(){
    "dener      "
    this.addItemTaskList = this.addItemTaskList.trim();
    "dener"

    if(this.addItemTaskList){

      this.emitItemTaskKist.emit(this.addItemTaskList);
      this.addItemTaskList = "";

    }


  }

}
