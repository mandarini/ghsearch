import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchboxComponent } from './searchbox/searchbox.component';

import { RouterModule, Routes }  from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    SearchboxComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
