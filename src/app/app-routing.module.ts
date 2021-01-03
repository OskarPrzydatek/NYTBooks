import { RouterModule, Routes } from '@angular/router';
import { BestsellersListComponent } from './components/bestsellers-list/bestsellers-list.component';
import { NgModule } from '@angular/core';
import { SearchBooksArticlesComponent } from './components/search-books-articles/search-books-articles.component';

const routes: Routes = [
  { path: '', component: BestsellersListComponent },
  { path: 'search', component: SearchBooksArticlesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
