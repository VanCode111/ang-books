import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() length: number = 3;
  @Input() selected: number = 1;
  @Output() onClick = new EventEmitter();
  buttons: number[] = [];

  constructor() {}

  ngOnInit(): void {
    this.buttons = Array.from({ length: this.length }, (_, i) => i + 1);
  }
}
