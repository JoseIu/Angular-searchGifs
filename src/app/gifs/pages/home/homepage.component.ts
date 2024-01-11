import { Component, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';
import { GifService } from '../../services/gif.service';

@Component({
  selector: 'gifs-homepage',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(private gifService: GifService) {}
  ngOnInit(): void {
    this.gifService.searchTag('dev');
  }

  get gifs(): Gif[] {
    return this.gifService.gifList;
  }
}
