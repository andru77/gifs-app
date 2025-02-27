import { Component } from '@angular/core';
import {GifsService} from '../../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
    constructor(private gifsService: GifsService) {
    }

    get tagsHistory () {
      return this.gifsService.tagsHistory;
    }

    reSearchTag (tag: string) {
      this.gifsService.searchTag(tag);
    }
}
