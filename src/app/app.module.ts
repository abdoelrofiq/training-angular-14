import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RupiahPipe } from './rupiah.pipe';

@NgModule({
  declarations: [	
    AppComponent,
      RupiahPipe
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
