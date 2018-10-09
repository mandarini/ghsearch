import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-perpage',
  templateUrl: './perpage.component.html',
  styleUrls: ['./perpage.component.css']
})
export class PerpageComponent {

  @Output() perpaged = new EventEmitter<number>();

  search(perpage: number) {
    this.perpaged.emit(perpage);
  }

  constructor() { }

}
