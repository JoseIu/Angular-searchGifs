import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/homepage.component';
import { SerachBoxComponent } from './components/serach-box/serach-box.component';
import { CardListComponent } from './components/card-list/card-list.component';

@NgModule({
  declarations: [HomePageComponent, SerachBoxComponent, CardListComponent],
  imports: [CommonModule],
  exports: [HomePageComponent],
})
export class GifsModule {}
