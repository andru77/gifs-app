import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CardListComponent } from './components/card-list/card-list.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBarComponent,
    CardListComponent
  ],
  exports: [
    HomePageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
