import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BestsellersListComponent } from './components/bestsellers-list/bestsellers-list.component';
import { SearchComponent } from './components/search/search.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { LoadingComponent } from './components/loading/loading.component';
import { BestsellersComponent } from './components/bestsellers/bestsellers.component';
import { RankPipe } from './pipes/rank/rank.pipe';
import { MultiplicityPipe } from './pipes/multiplicity/multiplicity.pipe';
import { SearchPlaceholderPipe } from './pipes/search-placeholder/search-placeholder.pipe';
import { UpScrollComponent } from './components/up-scroll/up-scroll.component';

@NgModule({
  declarations: [
    AppComponent,
    BestsellersListComponent,
    SearchComponent,
    NavBarComponent,
    FooterComponent,
    SearchResultComponent,
    LoadingComponent,
    BestsellersComponent,
    RankPipe,
    MultiplicityPipe,
    SearchPlaceholderPipe,
    UpScrollComponent,
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
