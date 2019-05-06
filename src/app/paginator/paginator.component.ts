import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit {

  @Input()numberofPages : number;
  numbers: number[];
  @Output()pageNumberClicked = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
    this.numbers = new Array(this.numberofPages);
  }

  pageClicked(i:number){
    this.pageNumberClicked.emit(i);
  }

}
