import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/homepage.component';
import { SerachBoxComponent } from './components/serach-box/serach-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [HomePageComponent, SerachBoxComponent, CardListComponent, CardComponent],
  imports: [CommonModule],
  exports: [HomePageComponent],
})
export class GifsModule {}
