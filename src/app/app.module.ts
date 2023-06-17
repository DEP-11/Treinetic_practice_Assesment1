import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NamedisplayComponent } from './components/namedisplay/namedisplay.component';

@NgModule({
  declarations: [
    AppComponent,
    NamedisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
