import {Component, ElementRef, ViewChild, viewChild} from '@angular/core';
import {GifsService} from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-bar',
  standalone: false,
  template: `
    <h3>Search gifs:</h3>
    <input type="text"
           placeholder="Search gifs..."
           class="form-control"
           (keyup.enter)="searchTag()"
           #textTagInput
    >
  `
})
export class SearchBarComponent {
  @ViewChild('textTagInput')
  public textTag!: ElementRef<HTMLInputElement>;

  constructor( private gifsService: GifsService) {

  }


  searchTag(): void {
    const value = this.textTag.nativeElement.value;
    this.gifsService.searchTag(value)
    this.textTag.nativeElement.value = '';
  }
}
