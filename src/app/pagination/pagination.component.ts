import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {

  @Input() total: number;
  @Output() paged = new EventEmitter<number>();
 
  search(page: number) {
    this.paged.emit(page);
  }
  
  constructor() {
  }

  array(n: number): any[] {
    return Array(n);
  }

}