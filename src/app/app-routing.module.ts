import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BestsellersComponent } from './components/bestsellers/bestsellers.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {path: '', component: BestsellersComponent},
  {path: 'search', component: SearchComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
