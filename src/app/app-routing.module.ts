import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DisplayDetailsComponent } from './display-details/display-details.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
const routes: Routes = [
  {
    path: '',
    component: SearchDetailComponent
  },
  {
    path: 'details/:id',
    component: DisplayDetailsComponent
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
