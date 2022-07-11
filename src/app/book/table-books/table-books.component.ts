import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

import { Sort } from '@angular/material/sort';

const ELEMENT_DATA = [
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

const MY_DATA = [
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

@Component({
  selector: 'app-table-books',
  templateUrl: './table-books.component.html',
  styleUrls: ['./table-books.component.scss'],
  animations: [
    trigger('detailExpand', [
      state(
        'collapsed',
        style({ height: '0px', minHeight: '0', display: 'none' })
      ),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class TableBooksComponent implements OnInit {
  dataSource = ELEMENT_DATA;

  dataSource2 = { ...ELEMENT_DATA };

  extendedColumns = ['displayedInCell', 'name', 'weight', 'position'];

  columnsToDisplay1 = ['name', 'weight', 'symbol', 'position'];

  expandedElement = Object.create(null);

  sortedData;

  constructor() {
    this.sortedData = this.dataSource.slice();
  }

  ngOnInit(): void {}

  sortData(sort: Sort) {
    const data = this.dataSource.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'position':
          return compare(a.position, b.position, isAsc);
        case 'weight':
          return compare(a.weight, b.weight, isAsc);
        case 'symbol':
          return compare(a.symbol, b.symbol, isAsc);
        default:
          return 0;
      }
    });
  }

  getNewData(): void {
    const newData = [];

    for (let i = 0; i < Math.floor(Math.random() * 100) + 2; i++) {
      newData.push({
        position: newData.length,
        name: (Math.random() + 1).toString(36).substring(7),
        weight: Math.random() * 5,
        symbol: (Math.random() + 1).toString(36).substring(1),
      });
    }

    this.dataSource = newData;
    this.sortedData = newData;
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
