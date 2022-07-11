import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';

import { SharedModule } from '../shared/shared.module';

import { BookRoutingModule } from './book-routing.module';
import { Page1Component } from './page1/page1.component';
import { BookPageComponent } from './book-page/book-page.component';
import { HeaderComponent } from './header/header.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { Page5Component } from './page5/page5.component';
import { TableBooksComponent } from './table-books/table-books.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSortModule } from '@angular/material/sort';

import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    Page1Component,
    BookPageComponent,
    HeaderComponent,
    Page2Component,
    Page3Component,
    Page4Component,
    Page5Component,
    TableBooksComponent,
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    SharedModule,
    MatTableModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatButtonModule,
  ],
})
export class BookModule {}
