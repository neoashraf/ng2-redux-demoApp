import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store'
import { ReadComponent } from './read/read.component';
import { WriteComponent } from './write/write.component';
import { reducers } from './app.state';
@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    WriteComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
