import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
export { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ChoresComponent } from './chores/chores.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    ChoresComponent
  ],
  imports: [
    BrowserModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
