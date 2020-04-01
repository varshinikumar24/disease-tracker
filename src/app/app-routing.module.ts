import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DisplayDetailsComponent } from './display-details/display-details.component';

const routes: Routes = [
  {
    path: '',
    component: DisplayDetailsComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
