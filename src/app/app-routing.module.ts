import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
 
import { SearchComponent }   from './search/search.component';
 
const appRoutes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: '',   redirectTo: '/search', pathMatch: 'full' },
  // { path: '**', redirectTo: '/search', pathMatch: 'full' }
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}