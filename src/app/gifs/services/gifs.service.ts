import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import SearchResponse, {Gifs} from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  public gifsList:      Gifs[] = [];
  private giphy_key:    string = 'OqQhS7HkUuoJKkDtmyBBaHW7o3lrpIBG'
  private apiUrl:       string = 'https://api.giphy.com/v1/gifs/search'
  private _tagsHistory: string[] = [];

  constructor(private http: HttpClient ) {
    this.loadLocalHistory();
  }

  get tagsHistory() {
    return [...this._tagsHistory]
  }

  searchTag( tag: string) : void {
    if (tag.length === 0) return;
    const params = new HttpParams()
      .set('api_key',this.giphy_key)
      .set('q', tag)
      .set('limit', '10')

    this.http.get<SearchResponse>(this.apiUrl, {params}).subscribe(( response) => {
      this.gifsList = response.data;
    })

    this.organizeHistory(tag);
  }

  saveHistory () :void {
    localStorage.setItem('tagHistory', JSON.stringify(this.tagsHistory))
  }

  loadLocalHistory() :void {
    if (!localStorage.getItem('tagHistory')) return;

    this._tagsHistory = JSON.parse( localStorage.getItem('tagHistory')!);
    this.searchTag(this._tagsHistory[0]);
  }

  organizeHistory( tag: string ) :void {
    const lowerCasedTag = tag.toLowerCase();
    if (this._tagsHistory.includes(lowerCasedTag)) {
      this._tagsHistory = this._tagsHistory.filter((element) => element !== lowerCasedTag );
    }

    this._tagsHistory.unshift(lowerCasedTag);
    this._tagsHistory = this._tagsHistory.splice(0,10);
    this.saveHistory();
  }

}
