import {RouterModule, Routes} from '@angular/router';
import {BestsellersListComponent} from './components/bestsellers-list/bestsellers-list.component';
import {NgModule} from '@angular/core';
import {SearchBooksComponent} from './components/search-books/search-books.component';

const routes: Routes = [
  { path: '', component: BestsellersListComponent },
  { path: 'search', component: SearchBooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
