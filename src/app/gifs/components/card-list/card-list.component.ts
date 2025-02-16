import { Component } from '@angular/core';
import {Gifs} from '../../interfaces/gifs.interfaces';
import {GifsService} from '../../services/gifs.service';

@Component({
  selector: 'gifs-card-list',
  standalone: false,
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {

  constructor(private gifsService: GifsService) {
  }
  get gifs(): Gifs[] {
    return this.gifsService.gifsList;
  }

}
