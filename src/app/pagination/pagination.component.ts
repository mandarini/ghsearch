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
    // let pages = Array(n);
    /**
     * Here, I am filling an array with the sequence of numbers
     * for all the pages.
     * 
     * To do that, I create an array the size of the number
     * of pages I have.
     * 
     * Then I fill it with a temporary placeholder (otherwise it will
     * remain empty).
     * 
     * Then, I map all the indexed to each entry. I am adding 1
     * because the page counting starts at 1.
     */
    let pages = Array(n).fill(1).map((item, index) => 1 + index);
    if (n>7) {
      pages.splice(5, pages.length-7, -1);
    }
    return pages;
  }

}
