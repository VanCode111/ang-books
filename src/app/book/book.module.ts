import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { BookRoutingModule } from './book-routing.module';
import { Page1Component } from './page1/page1.component';
import { BookPageComponent } from './book-page/book-page.component';
import { HeaderComponent } from './header/header.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { Page5Component } from './page5/page5.component';

@NgModule({
  declarations: [
    Page1Component,
    BookPageComponent,
    HeaderComponent,
    Page2Component,
    Page3Component,
    Page4Component,
    Page5Component,
  ],
  imports: [CommonModule, BookRoutingModule, SharedModule],
})
export class BookModule {}
