import { Component } from '@angular/core';
import { GifService } from 'src/app/gifs/services/gif.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor(private tagsService: GifService) {}
  get tags() {
    return this.tagsService.tagsHistory;
  }

  public searchTag(tag: string): void {
    this.tagsService.searchTag(tag);
  }
}
