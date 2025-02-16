import {Component, Input, OnInit} from '@angular/core';
import {Gifs} from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gif-card',
  standalone: false,
  templateUrl: './gif-card.component.html',
  styleUrl: './gif-card.component.css'
})
export class GifCardComponent implements  OnInit {
   @Input()
   public gif!: Gifs;

   ngOnInit() {
     if (!this.gif)  {
       throw new Error('Gifs was no provided')
     }
   }
}
