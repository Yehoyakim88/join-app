import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryComponent } from './summary/summary.component';
import { BoardComponent } from './board/board.component';
import { ContactsComponent } from './contacts/contacts.component';
import { StartpageComponent } from './startpage/startpage.component';
import { CredentialsComponent } from './credentials/credentials.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    BoardComponent,
    ContactsComponent,
    StartpageComponent,
    CredentialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
