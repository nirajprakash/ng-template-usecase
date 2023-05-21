import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContainerComponent } from './container/container.component';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    // HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
