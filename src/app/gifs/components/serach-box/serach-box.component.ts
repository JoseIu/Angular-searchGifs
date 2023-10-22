import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifService } from '../../services/gif.service';

@Component({
  selector: 'gifs-serach-box',
  templateUrl: './serach-box.component.html',
  styleUrls: ['./serach-box.component.scss'],
})
export class SerachBoxComponent {
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifService) {}

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);

    //limpiamos el input
    this.tagInput.nativeElement.value = '';
  }
}
