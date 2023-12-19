import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsComponent } from '../movie-card/movie-details/movie-details.component';


@Component({
  selector: 'app-shoping-cart',
  standalone: true,
  imports: [CommonModule, MovieDetailsComponent,],
  templateUrl: './shoping-cart.component.html',
  styleUrl: './shoping-cart.component.css'
})
export class ShopingCartComponent {
  @Input() movie: any;


}
