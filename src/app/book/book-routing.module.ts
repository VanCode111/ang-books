import { BookPageComponent } from './book-page/book-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { Page5Component } from './page5/page5.component';
import { TableBooksComponent } from './table-books/table-books.component';

export const bookRoutes: Routes = [
  {
    path: '',

    component: BookPageComponent,
    children: [
      {
        path: '1',
        component: Page1Component,
      },
      {
        path: '2',
        component: Page2Component,
      },
      {
        path: '3',
        component: Page3Component,
      },

      {
        path: '4',
        component: Page4Component,
      },
      {
        path: '5',
        component: Page5Component,
      },
      {
        path: '6',
        component: TableBooksComponent,
      },
      {
        path: '**',
        redirectTo: '/',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(bookRoutes)],
  exports: [RouterModule],
})
export class BookRoutingModule {}
