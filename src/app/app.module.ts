import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayDetailsComponent } from './display-details/display-details.component';
import { DataService } from './data.service';
import { RouterModule, Routes} from '@angular/router';
import { SearchDetailComponent } from './search-detail/search-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    DisplayDetailsComponent,
    SearchDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
