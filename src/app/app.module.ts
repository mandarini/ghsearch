import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchboxComponent } from './searchbox/searchbox.component';

import { RouterModule, Routes }  from '@angular/router';
import { PaginationComponent } from './pagination/pagination.component';
import { PerpageComponent } from './perpage/perpage.component';
import { UserComponent } from './user/user.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchboxComponent,
    PaginationComponent,
    PerpageComponent,
    UserComponent,
    ResultsComponent,
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
