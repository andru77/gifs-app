import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  standalone: false,
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent implements OnInit {
   @Input()
   public url!: string;
   @Input()
   public altText: string = '';
   public hasLoaded: boolean = false;

   ngOnInit() {
     if (!this.url)
      throw new Error('Url was not provided')
   }


   onLoad(): void {
     this.hasLoaded = true;
   }


}
