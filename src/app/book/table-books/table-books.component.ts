import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { MatSort, Sort } from '@angular/material/sort';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-table-books',
  templateUrl: './table-books.component.html',
  styleUrls: ['./table-books.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class TableBooksComponent implements OnInit, AfterViewInit {
  dataSource;
  columnsToDisplay: string[];
  expandedElement: PeriodicElement | null;

  constructor() {
    this.dataSource = new MatTableDataSource(
      ELEMENT_DATA.map((item) => ({ ...item, extendedData: MY_DATA }))
    );
    this.columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
    this.expandedElement = null;
  }

  @ViewChild(MatSort) sort: MatSort = new MatSort();

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {}

  getNewData(): void {
    const newData = [];

    for (let i = 0; i < Math.floor(Math.random() * 100) + 2; i++) {
      newData.push({
        position: newData.length,
        name: (Math.random() + 1).toString(36).substring(7),
        weight: Math.random() * 5,
        symbol: (Math.random() + 1).toString(36).substring(1),
        extendedData: MY_DATA,
      });
    }

    this.dataSource = new MatTableDataSource(newData);
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface extendedElement {
  name: string;
  position: number;
  weight: number;
  displayedInCell: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

const MY_DATA: extendedElement[] = [
  {
    position: 24,
    name: 'ElementName',
    weight: 881.9950604495106,
    displayedInCell: 'Is not gas',
  },
  {
    position: 18,
    name: 'ElementName',
    weight: 797.1882834817152,
    displayedInCell: 'Is not gas',
  },
  {
    position: 81,
    name: 'ElementName',
    weight: 83.27795127138148,
    displayedInCell: 'Is not gas',
  },
  {
    position: 12,
    name: 'ElementName',
    weight: 484.7582920570088,
    displayedInCell: 'Is not gas',
  },
  {
    position: 37,
    name: 'ElementName',
    weight: 97.37565904722523,
    displayedInCell: 'Is not gas',
  },
  {
    position: 42,
    name: 'ElementName',
    weight: 807.5197617071963,
    displayedInCell: 'Is not gas',
  },
  {
    position: 87,
    name: 'ElementName',
    weight: 82.77845613163004,
    displayedInCell: 'Is not gas',
  },
  {
    position: 10,
    name: 'ElementName',
    weight: 203.494457177799,
    displayedInCell: 'Is not gas',
  },
  {
    position: 73,
    name: 'ElementName',
    weight: 228.65816441155462,
    displayedInCell: 'Is not gas',
  },
  {
    position: 6,
    name: 'ElementName',
    weight: 767.8192773812831,
    displayedInCell: 'Is not gas',
  },
];
