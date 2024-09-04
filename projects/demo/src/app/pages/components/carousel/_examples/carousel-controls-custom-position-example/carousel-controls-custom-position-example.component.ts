import { Component } from '@angular/core';
import { CarouselCardComponent } from '@elementar/components/carousel';
import { CarouselComponent } from '@elementar/components/carousel';
import { CarouselNextDirective } from '@elementar/components/carousel';
import { CarouselPreviousDirective } from '@elementar/components/carousel';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-carousel-controls-custom-position-example',
  standalone: true,
  imports: [
    CarouselCardComponent,
    CarouselComponent,
    CarouselNextDirective,
    CarouselPreviousDirective,
    MatIcon,
    MatIconButton
  ],
  templateUrl: './carousel-controls-custom-position-example.component.html',
  styleUrl: './carousel-controls-custom-position-example.component.scss'
})
export class CarouselControlsCustomPositionExampleComponent {

}
