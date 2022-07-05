import { BookPageComponent } from './book-page/book-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { Page5Component } from './page5/page5.component';

const routes: Routes = [
  { path: '', redirectTo: 'page/1', pathMatch: 'full' },
  {
    path: 'page/:mode',
    component: BookPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule {}
