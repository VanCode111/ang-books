import { extendedElement } from './../table-books/table-books.component';
import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  Input,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { MatSort, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-inner-table',
  templateUrl: './inner-table.component.html',
  styleUrls: ['./inner-table.component.scss'],
})
export class InnerTableComponent implements OnInit, AfterViewInit {
  @Input() extendedData!: extendedElement[];

  dataSource!: MatTableDataSource<extendedElement>;
  extendedColumns!: string[];

  @ViewChild(MatSort) sort: MatSort = new MatSort();

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  constructor() {
    this.extendedColumns = ['name', 'weight', 'position', 'displayedInCell'];
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<extendedElement>(
      this.extendedData
    );
  }
}
