import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartpageComponent } from './startpage/startpage.component';
import { BoardComponent } from './board/board.component';
import { SummaryComponent } from './summary/summary.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CredentialsComponent } from './credentials/credentials.component';

const routes: Routes = [
  { path: '', component: StartpageComponent },
  { path: 'summary', component: SummaryComponent}, 
  { path: 'board', component: BoardComponent},
  { path: 'contacts', component: ContactsComponent},
  { path: 'credentials', component: CredentialsComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
