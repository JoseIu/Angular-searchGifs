import { Component } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';
import { GifService } from '../../services/gif.service';

@Component({
  selector: 'gifs-homepage',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  constructor(private gifService: GifService) {}

  get gifs(): Gif[] {
    return this.gifService.gifList;
  }
}
