import {Component, ElementRef, ViewChild, viewChild} from '@angular/core';

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
  public textText!: ElementRef<HTMLInputElement>;


  searchTag(): void {
    console.log(this.textText.nativeElement.value)
  }
}
