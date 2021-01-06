import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BestsellersComponent } from './components/bestsellers/bestsellers.component';
import { SearchBooksArticlesComponent } from './components/search-books-articles/search-books-articles.component';

const routes: Routes = [
  {path: '', component: BestsellersComponent},
  {path: 'search', component: SearchBooksArticlesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
