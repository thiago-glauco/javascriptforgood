import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { TopBigNavigatorComponent } from './top-big-navigator/top-big-navigator.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, TopBigNavigatorComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
