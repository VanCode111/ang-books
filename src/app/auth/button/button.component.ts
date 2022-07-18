import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() loading!: boolean;
  @Input() disabled!: boolean;
  @Output() click = new EventEmitter<MouseEvent>();

  constructor() {}

  ngOnInit(): void {}

  onClick(): void {
    this.click.emit();
  }
}
