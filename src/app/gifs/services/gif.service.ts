import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifService {
  public gifList: Gif[] = [];

  private _tagHisotiry: string[] = [];
  private apiKey: string = 'vtu57cP8lwhUC7pUDXSZvMqNdNUrtkFB';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  private firstTag = '';

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
    if (!this.firstTag) return;
    this.searchTag(this.firstTag);
  }

  get tagsHistory() {
    return [...this._tagHisotiry];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLocaleLowerCase();

    //verficamos si existe el tag
    if (this._tagHisotiry.includes(tag)) {
      //filtramos el tag si existe
      this._tagHisotiry = this._tagHisotiry.filter((oldTag) => oldTag !== tag);
    }
    //añadimos el tag al principio con el unshift
    this._tagHisotiry.unshift(tag);

    //limitamos el lenght a 10 y si supera los 10, borra los ultimos
    this._tagHisotiry = this.tagsHistory.splice(0, 10);

    this.saveLocalStorage();
  }
  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagHisotiry));
  }
  private loadLocalStorage(): void {
    if (!localStorage.getItem('history')) return;
    this._tagHisotiry = JSON.parse(localStorage.getItem('history')!);

    if (this._tagHisotiry.length === 0) return;
    this.firstTag = this._tagHisotiry[0];
  }
  searchTag(tag: string): void {
    if (tag.length === 0) return;
    //validamos el tag
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', 10)
      .set('q', tag);

    this.http
      .get<SearchResponse>(`${this.serviceUrl}/search?`, { params })
      .subscribe((resp) => (this.gifList = resp.data));
  }
}
