import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchLinksComponent } from './search-links/search-links.component';
import { SearchLinksService } from './search-links.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchLinksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SearchLinksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
