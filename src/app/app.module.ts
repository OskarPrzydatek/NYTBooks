import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BestsellersListComponent } from './components/bestsellers-list/bestsellers-list.component';
import { SearchBooksArticlesComponent } from './components/search-books-articles/search-books-articles.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { BestsellersLoadingComponent } from './components/bestsellers-loading/bestsellers-loading.component';
import { BestsellersComponent } from './components/bestsellers/bestsellers.component';
import { RankPipe } from './pipes/rank/rank.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BestsellersListComponent,
    SearchBooksArticlesComponent,
    NavBarComponent,
    FooterComponent,
    SearchResultComponent,
    BestsellersLoadingComponent,
    BestsellersComponent,
    RankPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
