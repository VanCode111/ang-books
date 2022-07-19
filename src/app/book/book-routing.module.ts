import { AccessGuard } from './../access.guard';
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

        data: { token: '2591-1589-6307-7588' },
        canActivate: [AccessGuard],
      },
      {
        path: '2',
        component: Page2Component,
        canActivate: [AccessGuard],
        data: { token: '5311-8063-8012-5891' },
      },
      {
        path: '3',
        component: Page3Component,
        canActivate: [AccessGuard],
        data: { token: '2720-5381-0014-9982' },
      },

      {
        path: '4',
        component: Page4Component,
        canActivate: [AccessGuard],
        data: { token: '2607-5129-5339-4415' },
      },
      {
        path: '5',
        component: Page5Component,
        canActivate: [AccessGuard],
        data: { token: '3732-1984-1365-849' },
      },
      {
        path: '6',
        component: TableBooksComponent,
        canActivate: [AccessGuard],
        data: { token: '5525-5681-6140-8266' },
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '1',
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
