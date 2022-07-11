import { ButtonComponent } from './button/button.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BookModule } from './book/book.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, NotFoundComponent, ButtonComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    BookModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
