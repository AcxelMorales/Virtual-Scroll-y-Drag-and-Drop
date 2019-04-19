import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { VirtualComponent } from './components/virtual/virtual.component';
import { DragComponent } from './components/drag/drag.component';
import { PaisesDragComponent } from './components/paises-drag/paises-drag.component';

@NgModule({
  declarations: [
    AppComponent,
    VirtualComponent,
    DragComponent,
    PaisesDragComponent
  ],
  imports: [
    BrowserModule,
    ScrollingModule,
    DragDropModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
